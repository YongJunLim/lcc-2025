<script lang="ts">
	import type { TextHighlightProps } from '$lib/types/home';
	let props = $props();
	let { text }: TextHighlightProps = props;
</script>

<span class="relative inline-block">
	<span class="absolute inset-x-0 bottom-0 h-3 bg-yellow-300 md:h-4"></span>
	<span class="relative font-bold">{text}</span>
</span>
