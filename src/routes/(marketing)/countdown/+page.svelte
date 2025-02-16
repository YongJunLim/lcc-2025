<script lang="ts">
	import { INITIAL_SUBTITLE, ENDED_SUBTITLE } from '$lib/constants/countdown';
	import { EARLY_REG_URL, LCC_WEB_URL } from '$lib/constants/links';

	import Header from '$lib/components/countdown/Header.svelte';
	import MobileLayout from '$lib/components/countdown/MobileLayout.svelte';
	import TabletLayout from '$lib/components/countdown/TabletLayout.svelte';
	import DesktopLayout from '$lib/components/countdown/DesktopLayout.svelte';

	let countdownEnded = $state<boolean>(false);
	let subtitle: string = $state(INITIAL_SUBTITLE);
	let subtitleUrl: string = $state(EARLY_REG_URL);

	// Update subtitle when countdown ends
	$effect.pre(() => {
		if (countdownEnded) {
			subtitle = ENDED_SUBTITLE;
			subtitleUrl = LCC_WEB_URL;
		}
	});
</script>

<svelte:head>
	<title>Countdown to LCC '25</title>
	<meta name="description" content="Countdown to LCC '25" />
</svelte:head>

<div class="xs:px-4 bg-neutral-800 px-3 py-6 sm:px-6" id="departure-board">
	<Header {countdownEnded} {subtitle} {subtitleUrl} />

	<MobileLayout bind:countdownEnded />
	<TabletLayout bind:countdownEnded />
	<DesktopLayout bind:countdownEnded />
</div>

<style>
	#departure-board {
		min-height: 100vh;
		color: #fafaf9;
	}
</style>
