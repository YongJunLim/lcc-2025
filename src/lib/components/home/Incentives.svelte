<script>
	const incentives = [
		{
			icon: '/home/ice_cream.svg',
			title: 'Food',
			description: 'No one learns effectively on an empty stomach!',
			link: '/learn-more#refreshments'
		},
		{
			icon: '/home/present.svg',
			title: 'Gifts',
			description: 'Take home the gift of knowledge and more!',
			link: '/learn-more#door-gifts'
		},
		{
			icon: '/home/trophy.svg',
			title: 'Prizes',
			description: 'Prizes await for participants and presenters!',
			link: '/learn-more#lucky-draw'
		}
	];
</script>

<div class="grid grid-cols-1 py-1 sm:grid-cols-3">
	<div class="col-span-1 self-center sm:col-span-3">
		<svg
			id="Layer_2"
			data-name="Layer 2"
			preserveAspectRatio="none"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1920 292.65"
			class="max-h-24 w-full"
		>
			<defs>
				<style>
					.cls-1 {
						fill: var(--color-light-gray);
					}
				</style>
			</defs>
			<g id="Layer_1-2" data-name="Layer 1">
				<path class="cls-1" d="M0,212.34C138.57-122.78,694.86-35.02,1920,292.65H0v-80.32Z" />
			</g>
		</svg>
	</div>
	<div class="bg-light-gray col-span-1 self-center sm:col-span-3">
		<h1 class="text-light-orange px-8 pb-4 text-start text-4xl font-bold sm:max-w-full md:text-5xl">
			Take <span class="text-brand-orange italic">More</span> Than Just Knowledge
		</h1>
	</div>
	{#each incentives as { icon, title, description, link }, i}
		<div
			class="{i === 0
				? 'col-start-1'
				: ''} bg-light-gray flex flex-col items-center pb-4 text-center"
		>
			<img src={icon} alt={title} class="mb-4 size-32" />
			<h3 class="">
				<a
					class="text-light-orange hover:text-brand-orange px-8 text-2xl font-bold underline hover:decoration-4 md:text-3xl"
					href={link}>{title}</a
				>
			</h3>
			<p class="text-light-orange px-8 text-lg md:text-xl">{description}</p>
		</div>
	{/each}
	<div class="col-span-1 self-center sm:col-span-3">
		<svg
			id="Layer_2"
			data-name="Layer 2"
			preserveAspectRatio="none"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1920 418.47"
			class="max-h-32 w-full"
		>
			<defs>
				<style>
					.cls-1 {
						fill: var(--color-light-gray);
					}
				</style>
			</defs>
			<g id="Layer_1-2" data-name="Layer 1">
				<path
					class="cls-1"
					d="M953.5,0c320.5,0,75.5,0,966.5,0v254.53C1664.87,483.86,1199.12,533.03,0,0h953.5Z"
				/>
			</g>
		</svg>
	</div>
</div>

<style>
	h1 {
		font-family: var(--font-heading);
	}
</style>
