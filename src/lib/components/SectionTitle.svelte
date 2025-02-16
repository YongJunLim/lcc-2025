<script lang="ts">
	import type { TitleProps } from '$lib/types/section';
	let props = $props();
	let { title, subtitle = undefined }: TitleProps = props;
</script>

<div class="pb-4">
	{#if subtitle}
		<p class="text-brand-orange text-2xl font-bold md:text-3xl">{subtitle}</p>
	{/if}
	<h1 class="text-dark-blue pt-1 text-start text-4xl font-black md:text-5xl">{title}</h1>
</div>

<style>
	h1 {
		font-family: var(--font-heading);
	}
</style>
