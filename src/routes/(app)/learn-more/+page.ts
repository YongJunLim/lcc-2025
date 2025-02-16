import type { RegionsData } from '$lib/types/learn-more';
import type { SectionContent, Sections } from '$lib/types/section';
import regions from '$lib/content/regions/regions.json';

export const csr = true;
export const prerender = true;

const sections: Sections = import.meta.glob('$lib/content/learn-more/*.svx', {
	eager: true
});

const sectionOrder: string[] = [
	'presentation-booths',
	'activity-booths',
	'on-stage-presentations',
	'door-gifts',
	'event-passport',
	'refreshments',
	'lucky-draw',
	'lunchtime-performances'
];

export function load() {
	return {
		regions: regions as RegionsData,
		eventHighlights: sectionOrder.map((id) => ({
			Content: sections[`/src/lib/content/learn-more/${id}.svx`].default,
			metadata: sections[`/src/lib/content/learn-more/${id}.svx`].metadata
		})) as SectionContent[]
	};
}
