<script lang="ts">
	import type { Snippet } from 'svelte';
	import '/src/app.css';
	import NavBar from '$lib/components/NavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	let { children }: { children: Snippet } = $props();
</script>

<div class="flex min-h-screen flex-col">
	<NavBar />
	<main class="mt-28 flex flex-1 flex-col">
		{@render children()}
	</main>
	<Footer />
</div>
