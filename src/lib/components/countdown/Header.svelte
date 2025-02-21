<script lang="ts">
	import '$src/app.css';
	import type { HeaderProps } from '$lib/types/countdown';
	import MaterialSymbolsFlightTakeoff from 'virtual:icons/material-symbols/flight-takeoff';
	import { Confetti } from 'svelte-confetti';

	let { countdownEnded, subtitle, subtitleUrl }: HeaderProps = $props();
</script>

{#if countdownEnded}
	<div>
		<Confetti
			x={[-5, 12]}
			y={[0, 0.1]}
			delay={[1850, 3000]}
			duration={5000}
			amount={200}
			fallDistance="100vh"
		/>
	</div>
{/if}
<div
	class="splitflap-header md:grids-cols-21 xs:grid-cols-16 grid h-full grid-cols-10 pb-8 lg:grid-cols-33"
>
	<div class="xs:col-span-3 col-span-2 col-start-1 justify-self-center p-4 sm:hidden">
		<MaterialSymbolsFlightTakeoff class="text-amber-400" style="font-size:3rem" />
	</div>
	<div class="hidden justify-self-center p-4 sm:col-span-3 sm:col-start-1 sm:block lg:col-span-4">
		<MaterialSymbolsFlightTakeoff class="text-amber-400" style="font-size:5rem" />
	</div>
	<div class="xs:col-span-12 xs:col-start-4 col-span-7 col-start-3 lg:col-span-28">
		<div class="flex flex-col">
			<div>
				<h1 class="text-start text-3xl font-black sm:text-5xl md:text-6xl">
					SUTD LEARNING CELEBRATION CARNIVAL 2025
				</h1>
			</div>
			<div>
				<h2 class="text-start text-lg sm:text-2xl md:text-3xl">
					Borderless Learning, Unbridled Passion, Infinite Opportunities
				</h2>
			</div>
			<div>
				<a
					class="text-start text-lg font-bold text-green-400 underline hover:text-emerald-500 hover:decoration-4 sm:text-2xl md:text-3xl"
					href={subtitleUrl}
				>
					{subtitle}
				</a>
			</div>
			<div class="mt-4">
				<p class="text-start font-mono text-lg sm:text-xl md:text-2xl">
					Check your boarding details <a
						class="font-bold text-green-400 underline hover:text-emerald-500 hover:decoration-4"
						href="/home"
					>
						now
					</a> for a smooth takeoff.
				</p>
			</div>
		</div>
	</div>
</div>
