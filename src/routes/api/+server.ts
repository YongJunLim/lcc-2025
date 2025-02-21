import { json } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';
import { RateLimiter } from 'sveltekit-rate-limiter/server';
import {
	MICROSOFT_POWER_AUTOMATE_WORKFLOW_ID,
	MICROSOFT_POWER_AUTOMATE_WORKFLOW_NAME,
	MICROSOFT_POWER_AUTOMATE_WORKFLOW_OPERATION_NAME,
	MICROSOFT_POWER_AUTOMATE_USER_AGENT_START
} from '$env/static/private';
import {
	MicrosoftLogicAppsLimiter,
	DefaultLimiter,
	MICROSOFT_AZURE_LOGIC_SEA_IPS
} from '$lib/server/limiter';
import { getSupabaseClient } from '$lib/server/supabaseClient';

const limiter = new RateLimiter({
	plugins: [new MicrosoftLogicAppsLimiter(), new DefaultLimiter()]
});

export async function POST(event: RequestEvent) {
	const request_headers = event.request.headers;
	const client_ip = request_headers.get('X-Forwarded-For') || event.getClientAddress();
	if (!MICROSOFT_AZURE_LOGIC_SEA_IPS.includes(client_ip)) {
		const error = 'Forbidden: IP not allowed';
		return json({ error }, { status: 403 });
	}

	if (await limiter.isLimited(event)) {
		const error = 'Too Many Requests';
		return json({ error }, { status: 429 });
	}

	try {
		const { studentId, formResponseId, passcode, submitTime } = await event.request.json();
		console.log({ studentId, formResponseId, passcode, submitTime });

		const user_agent = request_headers.get('user-agent');
		const workflow_operation_name = request_headers.get('x-ms-workflow-operation-name');
		const workflow_name = request_headers.get('x-ms-workflow-name');
		const workflow_id = request_headers.get('x-ms-workflow-id');
		const x_app_api_key = request_headers.get('x-app-api-key');

		if (
			user_agent?.startsWith(MICROSOFT_POWER_AUTOMATE_USER_AGENT_START) &&
			workflow_operation_name === MICROSOFT_POWER_AUTOMATE_WORKFLOW_OPERATION_NAME &&
			workflow_name === MICROSOFT_POWER_AUTOMATE_WORKFLOW_NAME &&
			workflow_id === MICROSOFT_POWER_AUTOMATE_WORKFLOW_ID
		) {
			const options = {
				db: {
					schema: 'public'
				},
				global: {
					headers: { 'x-app-api-key': x_app_api_key }
				}
			};
			const supabase = getSupabaseClient(options);
			const { data, error: dbError } = await supabase
				.from('voted_poster_participants')
				.insert({
					student_id: studentId,
					form_response_id: parseInt(formResponseId),
					passcode,
					submit_time: submitTime
				})
				.select();

			if (dbError) {
				console.error('Database error:', dbError);
				return json({ error: dbError.message }, { status: 400 });
			}

			if (!data || data.length === 0) {
				const error = 'No data returned from database';
				return json({ error }, { status: 400 });
			}

			return json({ data }, { status: 201 });
		} else {
			const error = 'Invalid data';
			return json({ error }, { status: 401 });
		}
	} catch (e) {
		console.error(e);
		const error = 'Internal Server Error';
		return json({ error }, { status: 500 });
	}
}
