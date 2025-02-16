<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import { POSTER_VOTE_START_DATETIME, POSTER_VOTE_END_DATETIME } from '$lib/constants/dates';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
	function getVotingStatus() {
		const currentTime = new Date();

		if (currentTime < POSTER_VOTE_START_DATETIME) {
			return 'before';
		} else if (
			currentTime >= POSTER_VOTE_START_DATETIME &&
			currentTime <= POSTER_VOTE_END_DATETIME
		) {
			return 'during';
		} else {
			return 'after';
		}
	}
</script>

<svelte:head>
	<title>Learn more about LCC '25</title>
	<meta name="description" content="Learn more about LCC '25" />
</svelte:head>

<Section
	id={data.metadata.id}
	title={data.metadata.title}
	subtitle={data.metadata.subtitle}
	imageInfo={data.metadata.imageInfo}
>
	<data.Content />
</Section>

<div class="grow py-8">
	{#if getVotingStatus() === 'before'}
		<p class="text-center text-base font-bold sm:text-lg md:text-xl lg:text-2xl">
			Vote for your favorite poster when the exhibition starts!
		</p>
	{:else if getVotingStatus() === 'during'}
		<p class="text-center text-base font-bold sm:text-lg md:text-xl lg:text-2xl">
			Vote for your favorite poster at <a
				class="text-brand-orange font-bold underline hover:decoration-4"
				href="https://forms.office.com/r/S23aM8iC0E">https://forms.office.com/r/S23aM8iC0E</a
			> now!
		</p>
	{:else}
		<p class="text-center text-base font-bold sm:text-lg md:text-xl lg:text-2xl">
			Voting has ended. Thank you for participating!
		</p>
	{/if}
</div>
