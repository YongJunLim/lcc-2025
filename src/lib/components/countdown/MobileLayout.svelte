<script lang="ts">
	import type { LayoutProps } from '$lib/types/countdown';
	import {
		TIME_LIST,
		DEST_CONCISE_LIST,
		DEST_LIST,
		GATE_LIST,
		DATE_LIST
	} from '$lib/constants/countdown';
	import SplitFlap from '$lib/components/countdown/SplitFlap.svelte';
	import CountdownDisplay from '$lib/components/countdown/CountdownDisplay.svelte';

	let { countdownEnded = $bindable(false) }: LayoutProps = $props();
</script>

<div class="splitflap-body grids-cols-10 xs:grids-cols-16 sm:hidden">
	<h2 class="text-start font-mono text-lg font-bold">DESTINATION</h2>
	<div class="grid grid-cols-10 xs:hidden">
		{#each DEST_CONCISE_LIST as destElement}
			{#each destElement.split('') as destChar}
				<SplitFlap fontSize={'sm'} letter={destChar} />
			{/each}
			{#if destElement.length % 10 !== 0}
				{#each Array(10 - (destElement.length % 10)) as _}
					<SplitFlap fontSize={'sm'} letter={' '} />
				{/each}
			{/if}
		{/each}
	</div>
	<div class="hidden xs:grid xs:grid-cols-16 sm:hidden">
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
	<div class="grid grid-cols-10 xs:grid-cols-16">
		<div class="col-span-4 xs:col-span-5 sm:hidden">
			<h2 class="pt-2 text-start font-mono text-lg font-bold">TIME</h2>
			<div class="grid grid-cols-4 xs:hidden">
				{#each TIME_LIST as timeElement}
					{#each timeElement.padEnd(4, ' ').split('') as timeChar}
						<SplitFlap fontSize={'sm'} letter={timeChar} />
					{/each}
				{/each}
			</div>
			<div class="hidden xs:grid xs:grid-cols-5 sm:hidden">
				{#each TIME_LIST as timeElement}
					{#each timeElement.split('') as timeChar}
						<SplitFlap fontSize={'sm'} letter={timeChar} />
					{/each}
				{/each}
				<SplitFlap fontSize={'sm'} letter={' '} />
			</div>
		</div>
		<div class="col-span-5 col-start-6 xs:col-span-11 xs:col-start-7 sm:hidden">
			<h2 class="pt-2 text-start font-mono text-lg font-bold">GATE</h2>
			<div class="grid grid-cols-5 xs:hidden">
				{#each GATE_LIST as gateElement}
					{#each gateElement.padEnd(7, ' ').split('') as gateChar}
						<SplitFlap fontSize={'sm'} letter={gateChar} />
					{/each}
				{/each}
				<SplitFlap fontSize={'sm'} letter={' '} />
			</div>
			<div class="hidden xs:grid xs:grid-cols-11 sm:hidden">
				{#each GATE_LIST as gateElement}
					{#each gateElement.padEnd(11, ' ').split('') as gateChar}
						<SplitFlap fontSize={'sm'} letter={gateChar} />
					{/each}
				{/each}
			</div>
		</div>
	</div>
	<h2 class="pt-2 text-start font-mono text-lg font-bold">REMARKS</h2>
	<div class="grid grid-cols-10 xs:hidden">
		{#each DATE_LIST as dateElement}
			{#each dateElement.split('') as dateChar}
				<SplitFlap fontSize={'sm'} letter={dateChar} />
			{/each}
			{#if dateElement === '12'}
				<SplitFlap fontSize={'sm'} letter={' '} />
			{:else if dateElement === 'FEB'}
				<SplitFlap fontSize={'sm'} letter={' '} />
				<SplitFlap fontSize={'sm'} letter={' '} />
				<SplitFlap fontSize={'sm'} letter={' '} />
				<SplitFlap fontSize={'sm'} letter={' '} />
			{/if}
		{/each}
		{#each Array(6) as _}
			<SplitFlap fontSize={'sm'} letter={' '} />
		{/each}
	</div>
	<div class="hidden xs:grid xs:grid-cols-16 sm:hidden">
		{#each DATE_LIST as dateElement}
			{#each dateElement.split('') as dateChar}
				<SplitFlap fontSize={'sm'} letter={dateChar} />
			{/each}
			<SplitFlap fontSize={'sm'} letter={' '} />
		{/each}
		{#each Array(4) as _}
			<SplitFlap fontSize={'sm'} letter={' '} />
		{/each}
	</div>
	<h2 class="pt-2 text-start font-mono text-lg font-bold">TIME TO DEPARTURE</h2>
	<CountdownDisplay fontSize={'sm'} bind:countdownEnded />
</div>
