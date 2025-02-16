<script lang="ts">
	import { page } from '$app/state';
	import NavLink from '$lib/components/NavLink.svelte';
	const navLinks = [
		{ href: '/home', label: 'HOME' },
		{ href: '/learn-more', label: 'LEARN MORE' },
		{ href: '/about', label: 'ABOUT' },
		{ href: '/countdown', label: 'COUNTDOWN' }
	];
</script>

<header
	class="bg-dark-blue fixed top-0 z-20 mb-8 flex w-full items-center justify-between gap-4 p-4 sm:gap-8"
>
	<div class="xs:gap-3 flex items-center gap-2 p-1 sm:gap-4">
		<a href="/">
			<img src="/favicon/favicon.svg" alt="LCC Logo" class="w-8" />
		</a>
		<span class="text-brand-orange xs:block hidden text-2xl font-bold lg:hidden">LCC '25</span>
		<span class="text-brand-orange hidden text-2xl font-bold lg:block"
			>LEARNING CELEBERATION CARNIVAL '25</span
		>
	</div>
	<nav class="flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
		{#each navLinks as { href, label }}
			<NavLink {href} isActive={page.url.pathname === href} {label} />
		{/each}
	</nav>
</header>
