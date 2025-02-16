<script lang="ts">
	import type { LayoutProps } from '$lib/types/countdown';
	import { TIME_LIST, DEST_LIST, GATE_LIST, DATE_LIST } from '$lib/constants/countdown';
	import SplitFlap from '$lib/components/countdown/SplitFlap.svelte';
	import CountdownDisplay from '$lib/components/countdown/CountdownDisplay.svelte';

	let { countdownEnded = $bindable(false) }: LayoutProps = $props();
</script>

<div class="splitflap-body sm:grids-cols-21 hidden sm:grid md:hidden">
	<div class="sm:col-span-4 sm:col-start-1 md:hidden">
		<h2 class="text-start font-mono text-2xl font-bold">TIME</h2>
		<div class="pb-4 sm:grid sm:grid-cols-5 md:pb-5">
			{#each TIME_LIST as timeElement}
				{#each timeElement.padEnd(5, ' ').split('') as timeChar}
					<SplitFlap fontSize={'sm'} letter={timeChar} />
				{/each}
			{/each}
		</div>
		<h2 class="text-start font-mono text-2xl font-bold">GATE</h2>
		<div class="pb-4 sm:grid sm:grid-cols-5 md:pb-5">
			{#each GATE_LIST as gateElement}
				{#each gateElement.padEnd(10, ' ').split('') as gateChar}
					<SplitFlap fontSize={'sm'} letter={gateChar} />
				{/each}
			{/each}
		</div>
		<h2 class="text-start font-mono text-2xl font-bold">REMARKS</h2>
		<div class="pb-4 sm:grid sm:grid-cols-5 md:pb-5 lg:hidden">
			{#each DATE_LIST as dateElement}
				{#each dateElement.padEnd(5, ' ').split('') as dateChar}
					<SplitFlap fontSize={'sm'} letter={dateChar} />
				{/each}
			{/each}
		</div>
	</div>
	<div class="sm:col-span-16 sm:col-start-6">
		<h2 class="text-start font-mono text-2xl font-bold">DESTINATION</h2>
		<div class="pb-4 sm:grid sm:grid-cols-16 md:pb-5">
			{#each DEST_LIST as destElement}
				{#if destElement === 'SUSTAINABILITY TRIPS'}
					{#each destElement.split(' ') as destWord}
						{#each destWord.padEnd(16, ' ').split('') as destChar}
							<SplitFlap fontSize={'sm'} letter={destChar} />
						{/each}
					{/each}
				{:else}
					{#each destElement.padEnd(16, ' ').split('') as destChar}
						<SplitFlap fontSize={'sm'} letter={destChar} />
					{/each}
				{/if}
			{/each}
		</div>
		<h2 class="text-start font-mono text-2xl font-bold">TIME TO DEPARTURE</h2>
		<CountdownDisplay fontSize={'sm'} bind:countdownEnded />
	</div>
</div>

<div class="splitflap-body md:grids-cols-21 hidden md:grid lg:hidden">
	<div class="md:col-span-4 md:col-start-1 lg:hidden">
		<h2 class="text-start font-mono text-3xl font-bold">TIME</h2>
		<div class="pb-5 md:grid md:grid-cols-5">
			{#each TIME_LIST as timeElement}
				{#each timeElement.padEnd(5, ' ').split('') as timeChar}
					<SplitFlap letter={timeChar} />
				{/each}
			{/each}
		</div>
		<h2 class="text-start font-mono text-3xl font-bold">GATE</h2>
		<div class="pb-5 md:grid md:grid-cols-5">
			{#each GATE_LIST as gateElement}
				{#each gateElement.padEnd(10, ' ').split('') as gateChar}
					<SplitFlap letter={gateChar} />
				{/each}
			{/each}
		</div>
		<h2 class="text-start font-mono text-3xl font-bold">REMARKS</h2>
		<div class="pb-5 md:grid md:grid-cols-5 lg:hidden">
			{#each DATE_LIST as dateElement}
				{#each dateElement.padEnd(5, ' ').split('') as dateChar}
					<SplitFlap letter={dateChar} />
				{/each}
			{/each}
		</div>
	</div>
	<div class="md:col-span-16 md:col-start-6">
		<h2 class="text-start font-mono text-3xl font-bold">DESTINATION</h2>
		<div class="pb-5 md:grid md:grid-cols-16">
			{#each DEST_LIST as destElement}
				{#if destElement === 'SUSTAINABILITY TRIPS'}
					{#each destElement.split(' ') as destWord}
						{#each destWord.padEnd(16, ' ').split('') as destChar}
							<SplitFlap letter={destChar} />
						{/each}
					{/each}
				{:else}
					{#each destElement.padEnd(16, ' ').split('') as destChar}
						<SplitFlap letter={destChar} />
					{/each}
				{/if}
			{/each}
		</div>
		<h2 class="text-start font-mono text-3xl font-bold">TIME TO DEPARTURE</h2>
		<CountdownDisplay bind:countdownEnded />
	</div>
</div>
