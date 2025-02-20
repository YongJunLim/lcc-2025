<script lang="ts">
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import type { SectionProps } from '$lib/types/section';
	let props = $props();
	let { id, title, subtitle, imageInfo, contentOnRight = false, children }: SectionProps = props;
</script>

<div {id} class="grid scroll-mt-24 grid-cols-1 gap-0 pb-8 sm:grid-cols-2 md:pb-12 lg:pb-16">
	{#if imageInfo}
		<div class={contentOnRight ? 'order-2' : 'order-1'}>
			<div class="px-8 pb-4 sm:pb-0">
				<SectionTitle {title} {subtitle} />
				{@render children()}
			</div>
			{#if id === 'event-details'}
				<div class="flex content-center">
					<div class="w-full max-w-3xl">
						<img src="home/bike_path.svg" alt="bike path" />
					</div>
				</div>
			{:else if id === 'event-timeline'}
				<div class="flex content-center justify-end">
					<div class="hidden w-full max-w-2xl lg:block">
						<img src="home/flight_path.svg" alt="flight path" />
					</div>
				</div>
			{/if}
		</div>
		<div
			class="pb-4 md:pb-0 {contentOnRight
				? 'order-1 justify-self-start'
				: 'order-2 justify-self-end'}"
		>
			<div class="hidden h-auto w-full max-w-2xl pt-16 sm:block lg:pt-0">
				<img src={imageInfo.src} alt={imageInfo.alt} class="h-full w-full" />
			</div>
			{#if id === 'event-timeline'}
				<div class="flex content-center justify-end">
					<div class="hidden w-full max-w-2xl pt-12 md:block lg:hidden">
						<img src="home/flight_path.svg" alt="flight path" />
					</div>
				</div>
			{/if}
		</div>
	{/if}
</div>
