import { json } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';
import { RateLimiter } from 'sveltekit-rate-limiter/server';
import { createHmac } from 'crypto';
import { GAME_SECRET_KEY } from '$env/static/private';
import { DefaultLimiter } from '$lib/server/limiter';
import { getSupabaseClient } from '$lib/server/supabaseClient';

const limiter = new RateLimiter({
	plugins: [new DefaultLimiter()]
});

// get_time_dict_from_system(true)
function getGodotUTCFormattedDate(timestamp: Date): string {
	return (
		timestamp.getUTCFullYear() +
		'-' +
		String(timestamp.getUTCMonth() + 1).padStart(2, '0') +
		'-' +
		String(timestamp.getUTCDate()).padStart(2, '0') +
		'T' +
		String(timestamp.getUTCHours()).padStart(2, '0') +
		':' +
		String(timestamp.getUTCMinutes()).padStart(2, '0') +
		':' +
		String(timestamp.getUTCSeconds()).padStart(2, '0')
	);
}

export async function POST(event: RequestEvent) {
	if (await limiter.isLimited(event)) {
		return json({ error: 'Too Many Requests' }, { status: 429 });
	}

	try {
		const { student_id, timestamp, signature } = await event.request.json();
		const request_headers = event.request.headers;
		const x_app_api_key = request_headers.get('x-app-api-key');

		// Validate required fields
		if (!student_id || !timestamp || !signature) {
			return json({ error: 'Missing required fields' }, { status: 400 });
		}

		if (typeof student_id !== 'string') {
			return json({ error: 'Invalid input format' }, { status: 400 });
		}

		// Parse timestamp as UTC
		const providedTime = new Date(timestamp + 'Z'); // Append 'Z' to treat as UTC
		if (isNaN(providedTime.getTime())) {
			return json({ error: 'Invalid timestamp format' }, { status: 400 });
		}

		// Get current time in UTC
		const currentTime = new Date();
		console.log('Current UTC:', currentTime.toISOString());
		console.log('Provided UTC:', providedTime.toISOString());

		if (Math.abs(currentTime.getTime() - providedTime.getTime()) > 5 * 60 * 1000) {
			return json({ error: 'Request expired' }, { status: 401 });
		}

		// Generate HMAC signature using UTC timestamp format
		const expectedSignature = createHmac('sha256', GAME_SECRET_KEY)
			.update(getGodotUTCFormattedDate(providedTime))
			.digest('hex');

		console.log('Received signature:', signature);
		console.log('Expected signature:', expectedSignature);

		if (signature !== expectedSignature) {
			return json({ error: 'Invalid signature' }, { status: 401 });
		}

		const options = {
			db: {
				schema: 'public'
			},
			global: {
				headers: { 'x-app-api-key': x_app_api_key }
			}
		};
		const supabase = getSupabaseClient(options);

		// Check if student is early registered
		const { data: earlyRegData, error: earlyRegError } = await supabase
			.from('early_registered_participants')
			.select('student_id')
			.eq('student_id', student_id)
			.single();

		if (earlyRegError && earlyRegError.code !== 'PGRST116') {
			console.error('Database error:', earlyRegError);
			return json({ error: 'Database error' }, { status: 500 });
		} else if (earlyRegError.code !== 'PGRST116') {
			return json(
				{ early_registered: false, error: 'Student not early registered' },
				{ status: 403 }
			);
		}

		return json(
			{
				early_registered: true
			},
			{ status: 200 }
		);
	} catch (e) {
		console.error(e);
		return json({ error: 'Internal Server Error' }, { status: 500 });
	}
}
