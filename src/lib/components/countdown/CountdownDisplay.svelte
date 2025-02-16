<script lang="ts">
	import type { CountdownDisplayProps } from '$lib/types/countdown';
	import { onDestroy } from 'svelte';
	import { countdown, eventDate, eventStarted, getInitialDate } from '$lib/utils/countdown';
	import SplitFlap from '$lib/components/countdown/SplitFlap.svelte';

	let { countdownEnded = $bindable(false), fontSize = 'lg' }: CountdownDisplayProps = $props();

	let now: Date = $state(getInitialDate());
	let flipTime: boolean = $state(false);

	// Initial check for event start
	$effect.pre(() => {
		if (eventStarted(now)) {
			now = eventDate;
			countdownEnded = true;
		}
	});

	let days: number = $derived(countdown(now)['days']);
	let hours: number = $derived(countdown(now)['hours']);
	let minutes: number = $derived(countdown(now)['minutes']);
	let seconds: number = $derived(countdown(now)['seconds']);

	const timeoutId: ReturnType<typeof setTimeout> = setTimeout(() => {
		flipTime = true;
		const countdownInterval: ReturnType<typeof setInterval> = setInterval(() => {
			now = new Date();
			if (eventStarted(now)) {
				now = eventDate;
				clearInterval(countdownInterval);
				countdownEnded = true;
			}
		}, 1000);
	}, 3000);

	onDestroy(() => {
		clearTimeout(timeoutId);
	});
</script>

<div class="grid grid-cols-10 xs:hidden">
	{#each String(days).padStart(2, '0') as dayCount, dayIndex (dayIndex)}
		<SplitFlap {fontSize} letter={dayCount} {flipTime} />
	{/each}
	{#each ' DAYS'.padEnd(8, ' ') as letter}
		<SplitFlap {fontSize} {letter} />
	{/each}
	{#each String(hours).padStart(2, '0') as hourCount, hourIndex (hourIndex)}
		<SplitFlap {fontSize} letter={hourCount} {flipTime} />
	{/each}
	{#each ' HOURS'.padEnd(8, ' ') as letter}
		<SplitFlap {fontSize} {letter} />
	{/each}
	{#each String(minutes).padStart(2, '0') as minuteCount, minuteIndex (minuteIndex)}
		<SplitFlap {fontSize} letter={minuteCount} {flipTime} />
	{/each}
	{#each ' MINUTES'.padEnd(8, ' ') as letter}
		<SplitFlap {fontSize} {letter} {flipTime} />
	{/each}
	{#each String(seconds).padStart(2, '0') as secondCount, secondIndex (secondIndex)}
		<SplitFlap {fontSize} letter={secondCount} {flipTime} />
	{/each}
	{#each ' SECONDS'.padEnd(8, ' ') as letter}
		<SplitFlap {fontSize} {letter} />
	{/each}
</div>

<div class="hidden xs:grid xs:grid-cols-16 lg:hidden">
	{#each String(days).padStart(2, '0') as dayCount, dayIndex (dayIndex)}
		<SplitFlap {fontSize} letter={dayCount} {flipTime} />
	{/each}
	{#each ' DAYS'.padEnd(6, ' ') as letter}
		<SplitFlap {fontSize} {letter} />
	{/each}
	{#each String(hours).padStart(2, '0') as hourCount, hourIndex (hourIndex)}
		<SplitFlap {fontSize} letter={hourCount} {flipTime} />
	{/each}
	{#each ' HOURS' as letter}
		<SplitFlap {fontSize} {letter} />
	{/each}
	{#each String(minutes).padStart(2, '0') as minuteCount, minuteIndex (minuteIndex)}
		<SplitFlap {fontSize} letter={minuteCount} {flipTime} />
	{/each}
	{#each ' MINUTES'.padEnd(14, ' ') as letter}
		<SplitFlap {fontSize} {letter} {flipTime} />
	{/each}
	{#each String(seconds).padStart(2, '0') as secondCount, secondIndex (secondIndex)}
		<SplitFlap {fontSize} letter={secondCount} {flipTime} />
	{/each}
	{#each ' SECONDS'.padEnd(14, ' ') as letter}
		<SplitFlap {fontSize} {letter} />
	{/each}
</div>

<div class="hidden lg:grid lg:grid-cols-26">
	{#each String(days).padStart(2, '0') as dayCount, dayIndex (dayIndex)}
		<SplitFlap {fontSize} letter={dayCount} {flipTime} />
	{/each}
	{#each ' DAYS'.padEnd(6, ' ') as letter}
		<SplitFlap {fontSize} {letter} />
	{/each}
	{#each String(hours).padStart(2, '0') as hourCount, hourIndex (hourIndex)}
		<SplitFlap {fontSize} letter={hourCount} {flipTime} />
	{/each}
	{#each ' HOURS'.padEnd(16, ' ') as letter}
		<SplitFlap {fontSize} {letter} />
	{/each}
	{#each String(minutes).padStart(2, '0') as minuteCount, minuteIndex (minuteIndex)}
		<SplitFlap {fontSize} letter={minuteCount} {flipTime} />
	{/each}
	{#each ' MINUTES'.padEnd(9, ' ') as letter}
		<SplitFlap {fontSize} {letter} {flipTime} />
	{/each}
	{#each String(seconds).padStart(2, '0') as secondCount, secondIndex (secondIndex)}
		<SplitFlap {fontSize} letter={secondCount} {flipTime} />
	{/each}
	{#each ' SECONDS'.padEnd(13, ' ') as letter}
		<SplitFlap {fontSize} {letter} />
	{/each}
</div>
