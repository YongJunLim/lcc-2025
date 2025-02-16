<script lang="ts">
	import '/src/app.css';
	import type { Snippet } from 'svelte';
	let { children }: { children: Snippet } = $props();
</script>

<div class="app">
	<main>
		{@render children()}
	</main>
</div>

<style>
</style>
