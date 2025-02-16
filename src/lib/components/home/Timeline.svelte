<script>
	import events from '$lib/content/home/events.json';
</script>

<div class="timeline-grid px-8 pt-4">
	{#each events as event}
		<div class="flex flex-col items-center">
			<div class="text-2xl font-bold md:text-3xl">{event.time}</div>
			<div class="text-lg text-gray-500 md:text-xl">({event.duration})</div>
		</div>
		<div class="flex h-full flex-none flex-col items-center">
			<div
				class="size-8 rounded-full {event.title === 'Lunchtime Performances'
					? 'bg-blue-500'
					: 'bg-brand-orange'}"
			></div>
			<div class={event.title === 'Closing Address' ? '' : 'w-1 flex-1 bg-gray-300'}></div>
		</div>
		<div class="flex flex-grow flex-col pb-4">
			<div class="text-2xl font-bold md:text-3xl">{event.title}</div>
			<div class="text-dark-blue pt-1 text-lg md:text-xl">
				{#if Array.isArray(event.details)}
					{#each event.details as detail}
						{detail}<br />
					{/each}
				{:else}
					{event.details}
				{/if}
			</div>
		</div>
	{/each}
</div>

<style>
	.timeline-grid {
		display: grid;
		grid-template-columns: auto auto 1fr;
		column-gap: 1rem;
		row-gap: 0;
	}
</style>
