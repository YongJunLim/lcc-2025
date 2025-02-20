<script lang="ts">
	import { EARLY_REG_URL } from '$lib/constants/links';
</script>

<div class="grid grid-cols-2 px-8 pb-8">
	<div class="z-10 col-span-1 col-start-1 self-center">
		<h1
			class="text-dark-blue mb-4 w-full max-w-2xl text-start text-5xl font-bold sm:text-6xl md:text-7xl lg:text-8xl"
		>
			LEARNING<br />CELEBRATION<br />CARNIVAL 2025
		</h1>
		<h2 class="mb-4 text-xl sm:text-2xl md:max-w-lg md:text-4xl lg:mb-8 lg:text-5xl">
			<span class="text-brand-orange font-black italic">BORDERLESS</span>
			<span class="text-lg font-extralight sm:text-xl md:text-3xl lg:text-3xl">Learning,</span>
			<span class="text-brand-orange font-black italic">UNBRIDLED</span>
			<span class="text-lg font-extralight sm:text-xl md:text-3xl lg:text-3xl">Passion,</span><br />
			<span class="text-brand-orange font-black italic">INFINITE</span>
			<span class="text-lg font-extralight sm:text-xl md:text-3xl lg:text-3xl">Opportunities</span>
		</h2>
		<button
			class="bg-brand-orange hover:shadow-brand-orange/50 w-fit rounded-full px-8 py-3 duration-150 hover:bg-orange-600 hover:shadow-md md:py-4"
			><a href={EARLY_REG_URL} class="text-base text-white md:text-lg lg:text-xl">Sign up now</a
			></button
		>
	</div>
	<div class="col-span-1 col-start-2 place-self-end">
		<div class="xs:w-full w-48">
			<img src="home/study_abroad_pana.svg" alt="Student eager to learn" class="h-full w-full" />
		</div>
	</div>
</div>

<style>
	h1 {
		font-family: var(--font-heading);
	}
	h2 {
		font-family: var(--font-body), sans-serif;
	}
</style>
