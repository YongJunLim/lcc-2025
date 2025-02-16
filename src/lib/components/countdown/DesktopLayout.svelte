<script lang="ts">
	import type { LayoutProps } from '$lib/types/countdown';
	import { TIME_LIST, DEST_LIST, GATE_LIST, DATE_LIST } from '$lib/constants/countdown';
	import SplitFlap from '$lib/components/countdown/SplitFlap.svelte';
	import CountdownDisplay from '$lib/components/countdown/CountdownDisplay.svelte';

	let { countdownEnded = $bindable(false) }: LayoutProps = $props();
</script>

<div class="splitflap-body hidden lg:grid lg:grid-cols-33">
	<div class="col-span-4 col-start-1">
		<h2 class="text-start font-mono text-3xl font-bold">TIME</h2>
		<div class="grid grid-cols-4">
			{#each TIME_LIST as timeElement}
				{#each timeElement.padEnd(4, ' ').split('') as timeChar}
					<SplitFlap letter={timeChar} />
				{/each}
			{/each}
			{#each Array(DEST_LIST.length - TIME_LIST.length) as _}
				{#each '    '.split('') as emptyChar}
					<SplitFlap letter={emptyChar} />
				{/each}
			{/each}
		</div>
	</div>
	<div class="col-span-21 col-start-6">
		<h2 class="text-start font-mono text-3xl font-bold">DESTINATION</h2>
		<div class="grid grid-cols-21">
			{#each DEST_LIST as destElement}
				{#each destElement.padEnd(21, ' ').split('') as destChar}
					<SplitFlap letter={destChar} />
				{/each}
			{/each}
		</div>
	</div>
	<div class="col-span-6 col-start-28">
		<h2 class="text-start font-mono text-3xl font-bold">GATE</h2>
		<div class="grid grid-cols-6">
			{#each GATE_LIST as gateElement}
				{#each gateElement.padEnd(6, ' ').split('') as gateChar}
					<SplitFlap letter={gateChar} />
				{/each}
			{/each}
			{#each Array(DEST_LIST.length - GATE_LIST.length) as _}
				{#each '      '.split('') as emptyChar}
					<SplitFlap letter={emptyChar} />
				{/each}
			{/each}
		</div>
	</div>
	<div class="col-span-26 col-start-1 pt-8">
		<h2 class="text-start font-mono text-3xl font-bold">TIME TO DEPARTURE</h2>
		<CountdownDisplay bind:countdownEnded />
	</div>
	<div class="col-span-6 col-start-28 pt-8">
		<h2 class="text-start font-mono text-3xl font-bold">REMARKS</h2>
		<div class="grid grid-cols-6">
			{#each DATE_LIST as dateElement}
				{#each dateElement.split('') as dateChar}
					<SplitFlap letter={dateChar} />
				{/each}
				{#if dateElement === '12'}
					<SplitFlap letter={' '} />
				{:else if dateElement === '2025'}
					<SplitFlap letter={' '} />
					<SplitFlap letter={' '} />
				{/if}
			{/each}
		</div>
	</div>
</div>
