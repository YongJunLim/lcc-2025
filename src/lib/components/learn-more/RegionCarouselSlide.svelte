<script lang="ts">
	export let image: string;
	export let title: string;
	export let link: string;
</script>

<div class="embla__slide">
	<a href={link} class="block transition-transform duration-200 hover:scale-90">
		<div class="relative">
			<div class="aspect-video w-full">
				<img
					src={image}
					alt="Region for {title}"
					class="h-full w-full rounded-md object-cover sm:rounded-lg md:rounded-xl lg:rounded-2xl"
				/>
				<div
					class="absolute inset-0 rounded-md bg-gradient-to-t from-black/30 to-transparent sm:rounded-lg md:rounded-xl lg:rounded-2xl"
				></div>
				<div class="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8">
					<h1 class="text-2xl text-white sm:text-3xl md:text-4xl">{title}</h1>
				</div>
			</div>
		</div>
	</a>
</div>

<style>
	.embla__slide {
		height: 100%;
		padding-left: var(--slide-spacing);
		/* --slide-height: 19rem; */
		--slide-spacing: 0.75rem;
	}

	@media (min-width: 448px) {
		.embla__slide {
			--slide-spacing: 1rem;
		}
	}

	@media (min-width: 640px) {
		.embla__slide {
			--slide-spacing: 1.5rem;
		}
	}

	@media (min-width: 768px) {
		.embla__slide {
			--slide-spacing: 2rem;
		}
	}

	@media (min-width: 1024px) {
		.embla__slide {
			--slide-spacing: 3rem;
		}
	}
</style>
