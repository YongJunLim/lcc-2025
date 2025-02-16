import type { ParamMatcher } from '@sveltejs/kit';

export const match = ((param: string): param is 'home' | 'learn-more' | 'about' | 'countdown' => {
	return param === 'home' || param === 'learn-more' || param === 'about' || param === 'countdown';
}) satisfies ParamMatcher;
