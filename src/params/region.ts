import type { ParamMatcher } from '@sveltejs/kit';

type ValidRegion = 'overseas' | 'stuorg' | 'sustainability' | 'urop' | 'datech';

export const match = ((param: string): param is ValidRegion => {
	const validRegions: ValidRegion[] = ['overseas', 'stuorg', 'sustainability', 'urop', 'datech'];
	return validRegions.includes(param as ValidRegion);
}) satisfies ParamMatcher;
