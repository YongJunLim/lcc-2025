import type { RequestEvent } from '@sveltejs/kit';
import type { Rate, RateLimiterPlugin } from 'sveltekit-rate-limiter/server';
import { MICROSOFT_POWER_AUTOMATE_USER_AGENT_START } from '$env/static/private';

export const MICROSOFT_AZURE_LOGIC_SEA_IPS = [
	'13.76.133.155',
	'52.163.228.93',
	'52.163.230.166',
	'13.76.4.194',
	'13.67.110.109',
	'13.67.91.135',
	'13.76.5.96',
	'13.67.107.128',
	'20.195.49.240',
	'20.195.49.29',
	'20.198.130.152',
	'20.198.128.124',
	'23.98.121.179',
	'23.98.121.115',
	'4.144.203.116',
	'4.144.203.254',
	'4.144.203.72',
	'4.144.204.223',
	'20.247.192.203',
	'20.247.192.18',
	'20.247.197.137',
	'20.247.197.3',
	'20.247.196.123',
	'20.247.197.249',
	'20.247.195.111',
	'20.247.195.8',
	'20.247.197.146',
	'20.247.197.100',
	'20.247.197.40',
	'20.247.198.128',
	'20.247.198.96'
];

// Custom limiter for Microsoft Azure Logic Apps
export class MicrosoftLogicAppsLimiter implements RateLimiterPlugin {
	readonly rate: Rate = [60, 'm'];

	async hash(event: RequestEvent) {
		const clientIp = event.request.headers.get('X-Forwarded-For') || event.getClientAddress();
		const userAgent = event.request.headers.get('user-agent');

		if (
			MICROSOFT_AZURE_LOGIC_SEA_IPS.includes(clientIp) &&
			userAgent?.startsWith(MICROSOFT_POWER_AUTOMATE_USER_AGENT_START)
		) {
			return clientIp + userAgent; // Return hash for rate limiting
		}
		return null; // Move to next limiter
	}
}

// Default limiter for other requests
export class DefaultLimiter implements RateLimiterPlugin {
	readonly rate: Rate = [10, 'm'];

	async hash(event: RequestEvent) {
		const clientIp = event.request.headers.get('X-Forwarded-For') || event.getClientAddress();
		const userAgent = event.request.headers.get('user-agent');
		return clientIp + (userAgent || '');
	}
}
