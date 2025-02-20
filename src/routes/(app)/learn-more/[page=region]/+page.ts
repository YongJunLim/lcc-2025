import type { PageProps } from './$types';
import type { SectionContent, Sections } from '$lib/types/section';

const regionContent: Sections = import.meta.glob('$lib/content/regions/*.svx', {
	eager: true
});

export const csr = true;
export const prerender = true;

export function load({ params }: PageProps) {
	const regionPath = `/src/lib/content/regions/${params.page}.svx`;

	if (!(regionPath in regionContent)) {
		throw new Error(`Region content not found for ${params.page}`);
	}

	return {
		Content: regionContent[regionPath].default,
		metadata: regionContent[regionPath].metadata
	} as SectionContent;
}
