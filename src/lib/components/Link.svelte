<script lang="ts">
	export let href: string;
	export let colorClass: string = 'text-brand-orange';
	export let weight: 'base' | 'bold' | 'black' = 'base';
</script>

<a
	{href}
	class="{colorClass} underline hover:underline {weight === 'base'
		? 'hover:decoration-2'
		: weight === 'bold'
			? 'hover:decoration-4'
			: 'hover:decoration-from-font'}"
>
	{href}
</a>
