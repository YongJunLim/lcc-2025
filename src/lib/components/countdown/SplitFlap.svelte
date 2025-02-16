<script lang="ts">
	import type { SplitFlapProps } from '$lib/types/countdown';
	import { generateInitialLetters } from '$lib/utils/countdown';

	let { letter, flipTime = false, fontSize = 'lg' }: SplitFlapProps = $props();
	const lettersToIterate: string[] = generateInitialLetters(letter);

	let counter: number = 0;
	let baseTop: string = $state(lettersToIterate[counter]);
	let baseBottom: string = $state(lettersToIterate[counter]);
	let flapFront: string = $state('');
	let flapBack: string = $state('');
	let shown: boolean = $state(false);
	let shownChar: string = $state(lettersToIterate[counter]);

	function flip(char: string, duration: number): void {
		if (shownChar !== char) {
			let current: string = shownChar;
			shownChar = char;
			flapFront = current;
			flapBack = shownChar;
			baseTop = shownChar;
			shown = !shown;
			setTimeout(() => {
				shown = !shown;
				baseBottom = shownChar;
			}, duration);
		}
	}

	const intervalId = setInterval(() => {
		counter++;
		flipTime = false;
		flip(lettersToIterate[counter], 350);
		if (counter > 4) {
			clearInterval(intervalId);
		}
	}, 500);

	$effect(() => {
		if (flipTime) {
			setInterval(() => {
				flip(letter, 350);
			}, 1000);
		}
	});
</script>

<div class="split-flap" data-size={fontSize} data-number={shownChar}>
	<div class="base">
		<div class="top">{baseTop}</div>
		<div class="bottom">{baseBottom}</div>
	</div>
	<div class="flap front" class:shown data-content={flapFront}></div>
	<div class="flap back" class:shown data-content={flapBack}></div>
</div>

<style>
	.split-flap {
		display: grid;
		position: relative;
		text-align: center;
		align-content: center;
		margin: 0.25rem 0.125rem;
		height: var(--flap-height, 3rem);
		max-width: var(--flap-width, 2.25rem);
		font-size: var(--flap-font-size, 1.5rem);
		background: #18181b;
		font-family: var(--font-mono);
		font-weight: 800;
		border: 1px solid rgba(0, 0, 0, 0.2);
		border-radius: 8px;
		box-shadow: inset 2px 2px 0px 0px rgba(0, 0, 0, 0.5);
	}

	.split-flap[data-size='sm'] {
		--flap-height: 2.5rem;
		--flap-width: 1.875rem;
		--flap-font-size: 1.25rem;
	}

	.split-flap[data-size='lg'] {
		--flap-height: 3rem;
		--flap-width: 2.25rem;
		--flap-font-size: 1.5rem;
	}

	.base,
	.flap {
		position: relative;
		grid-row: 1 / 1;
		grid-column: 1 / 1;
	}

	.base {
		display: grid;
	}

	.base .top,
	.base .bottom {
		position: relative;
		grid-row: 1 / 1;
		grid-column: 1 / 1;
	}

	.base .top::after,
	.base .bottom::after {
		content: '';
		position: absolute;
		left: 0;
		width: 100%;
		height: 2px;
	}

	.base .top {
		clip-path: inset(0 0 50% 0);
	}

	.base .top::after {
		top: calc(50% - 2px);
		background-color: #09090b;
	}

	.base .bottom {
		clip-path: inset(50% 0 0 0);
	}

	/* .base .bottom::after {
		bottom: calc(20% - 2px);
		background-color: #18181b;
	} */

	.flap {
		display: none;
		backface-visibility: hidden;
	}

	.flap.shown {
		display: block;
		animation: flip 0.6s ease-in-out 0s 1 normal forwards;
	}

	.flap.front::before,
	.flap.back::before {
		content: attr(data-content);
	}

	.flap.front::after,
	.flap.back::after {
		content: '';
		position: absolute;
		left: 0;
		width: 100%;
		height: 2px;
	}

	.front {
		clip-path: inset(0 0 50% 0);
		transform: rotateX(0deg);
		background-color: #09090b;
		border-radius: 8px 8px 0 0;
	}

	.front::after {
		top: calc(50% - 2px);
		background-color: #09090b;
	}

	.front.shown {
		animation-name: flip-top;
	}

	.back {
		clip-path: inset(50% 0 0 0);
		transform: rotateX(-180deg);
		background-color: #18181b;
		border-radius: 0 0 8px 8px;
	}

	.back::after {
		bottom: calc(20% - 2px);
		background-color: #18181b;
	}

	.back.shown {
		animation-name: flip-bottom;
	}

	@keyframes flip-top {
		from {
			transform: rotateX(0deg);
		}
		to {
			transform: rotateX(180deg);
		}
	}

	@keyframes flip-bottom {
		from {
			transform: rotateX(-180deg);
		}
		to {
			transform: rotateX(0deg);
		}
	}
</style>
