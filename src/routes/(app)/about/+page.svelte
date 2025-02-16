<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>About LCC '25</title>
	<meta name="description" content="About LCC '25" />
</svelte:head>

{#each data.about as section}
	<Section id={section.metadata.id} title={section.metadata.title}>
		<section.Content />
	</Section>
{/each}
<Section id="floor-plan" title="Floor Plan">
	<div class="flex justify-center">
		<img src="floor_plan.svg" alt="LCC '25 Floor Plan" class="px-4 md:w-5/6 xl:w-4/6" />
	</div>
</Section>
