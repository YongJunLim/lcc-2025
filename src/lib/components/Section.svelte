<script lang="ts">
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import type { SectionProps } from '$lib/types/section';
	let props = $props();
	let { id, title, subtitle, imageInfo, contentOnRight = false, children }: SectionProps = props;
</script>

<div
	{id}
	class="scroll-mt-24 {imageInfo ? '' : 'px-8 md:px-12 lg:px-16'} {id === 'event-highlights' ||
	id.includes('-region')
		? ''
		: 'pb-8 md:pb-12 lg:pb-16'}"
>
	{#if imageInfo}
		<div class="flex flex-col gap-4 sm:flex-row sm:gap-8">
			<div
				class="flex-none {contentOnRight
					? 'sm:order-2'
					: 'sm:order-1'}  w-full overflow-hidden sm:w-1/2 sm:pb-0"
			>
				<img
					src={imageInfo.src}
					alt={imageInfo.alt}
					class="aspect-[3/2] w-full rounded-md object-cover object-center sm:aspect-square sm:rounded-lg md:rounded-xl lg:aspect-[3/2] lg:rounded-2xl"
				/>
			</div>
			<div class="pb-4 sm:pb-0 {contentOnRight ? 'sm:order-1' : 'sm:order-2'}">
				<SectionTitle {title} {subtitle} />
				{@render children()}
			</div>
		</div>
	{:else if id.includes('-region')}
		<div class="flex flex-col gap-4 sm:flex-row sm:gap-8">
			<div class="w-full flex-none overflow-hidden sm:order-1 sm:w-2/5 sm:pb-0">
				<SectionTitle {title} {subtitle} />
			</div>
			<div class="pb-4 sm:order-2 sm:pb-0">
				{@render children()}
			</div>
		</div>
	{:else}
		<SectionTitle {title} {subtitle} />
		{@render children()}
	{/if}
</div>
