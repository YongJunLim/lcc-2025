<script lang="ts">
	import RegionCarouselSlide from '$lib/components/learn-more/RegionCarouselSlide.svelte';
	import Section from '$lib/components/Section.svelte';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import type { PageProps } from './$types';
	emblaCarouselSvelte.globalOptions = { loop: true };
	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Learn more about LCC '25</title>
	<meta name="description" content="Learn more about LCC '25" />
</svelte:head>

<Section id="regions" title="Regions">
	<div class="embla">
		<div class="embla__viewport" use:emblaCarouselSvelte>
			<div
				class="embla__container xs:[grid-auto-columns:75%] grid [grid-auto-columns:80%] grid-flow-col sm:[grid-auto-columns:70%] md:[grid-auto-columns:65%] lg:[grid-auto-columns:50%]"
			>
				{#each Object.entries(data.regions) as [image, slideInfo]}
					<RegionCarouselSlide {image} title={slideInfo.title} link={slideInfo.link} />
				{/each}
			</div>
		</div>
	</div>
</Section>

<Section id="event-highlights" title={"What's In Store For You"}>
	{#each data.eventHighlights as section, i}
		<Section
			id={section.metadata.id}
			title={section.metadata.title}
			subtitle={section.metadata.subtitle}
			imageInfo={section.metadata.imageInfo}
			contentOnRight={i % 2 === 1}
		>
			<section.Content />
		</Section>
	{/each}
</Section>
