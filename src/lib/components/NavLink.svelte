<script lang="ts">
	export let href: string;
	export let isActive: boolean;
	export let label: string;
</script>

<a
	{href}
	class="text-center {isActive
		? 'text-brand-orange pointer-events-none font-semibold'
		: 'text-white hover:text-blue-400'} xs:text-sm text-xs duration-200 sm:text-base"
>
	{label}
</a>
