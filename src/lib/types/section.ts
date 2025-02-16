import type { Snippet, SvelteComponent } from 'svelte';

type GlobModule = {
	default: typeof SvelteComponent;
	metadata: SectionMetadata;
};

export type Sections = Record<string, GlobModule>;

interface ImageInfo {
	src: string;
	alt: string;
}

interface TitleProps {
	title: string;
	subtitle?: string;
}

export interface SectionMetadata extends TitleProps {
	id: string;
	imageInfo?: ImageInfo;
}

export interface SectionProps extends SectionMetadata {
	contentOnRight?: boolean;
	children: Snippet;
}

export interface SectionContent {
	Content: typeof SvelteComponent;
	metadata: SectionMetadata;
}
