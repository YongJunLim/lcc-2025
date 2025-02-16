import type { SectionContent, Sections } from '$lib/types/section';

export const csr = true;
export const prerender = true;

const sections: Sections = import.meta.glob('$lib/content/about/*.svx', {
	eager: true
});

export function load() {
	return {
		about: Object.values(sections).map((section) => ({
			Content: section.default,
			metadata: section.metadata
		})) as SectionContent[]
	};
}
