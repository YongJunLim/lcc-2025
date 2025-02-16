import type { SectionContent, Sections } from '$lib/types/section';

export const csr = true;
export const prerender = true;

const sections: Sections = import.meta.glob('$lib/content/home/*.svx', {
	eager: true
});

const sectionOrder: string[] = ['event-details', 'event-timeline'];

export function load() {
	return {
		homeSections: sectionOrder.map((id) => ({
			Content: sections[`/src/lib/content/home/${id}.svx`].default,
			metadata: sections[`/src/lib/content/home/${id}.svx`].metadata
		})) as SectionContent[]
	};
}
