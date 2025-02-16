<script lang="ts">
	import HomeSection from '$lib/components/home/HomeSection.svelte';
	import Hero from '$lib/components/home/Hero.svelte';
	import Incentives from '$lib/components/home/Incentives.svelte';
	import Sponsors from '$lib/components/home/Sponsors.svelte';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>SUTD LCC '25</title>
	<meta name="description" content="SUTD LCC '25" />
</svelte:head>

<Hero />
{#each data.homeSections as section, i}
	<HomeSection
		id={section.metadata.id}
		title={section.metadata.title}
		subtitle={section.metadata.subtitle}
		imageInfo={section.metadata.imageInfo}
		contentOnRight={i % 2 === 1}
	>
		<section.Content />
	</HomeSection>
{/each}
<Incentives />
<Sponsors />
