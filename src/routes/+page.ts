import { dev } from '$app/environment';
import { redirect } from '@sveltejs/kit';
import { EVENT_DATETIME } from '$lib/constants/dates';

export const csr = dev;
export const prerender = true;

export function load() {
	const currentDate = new Date();
	const showCountdownUntil = new Date(EVENT_DATETIME);
	showCountdownUntil.setDate(EVENT_DATETIME.getDate() - 14);
	if (currentDate < showCountdownUntil) {
		throw redirect(307, '/countdown');
	} else {
		throw redirect(308, '/home');
	}
}
