import { EVENT_DATETIME } from '$lib/constants/dates';
export const eventDate: Date = EVENT_DATETIME;

export function eventStarted(now: Date): boolean {
	return now >= eventDate;
}

export function countdown(now: Date) {
	const difference = eventDate.getTime() - now.getTime();

	const days = Math.floor(difference / (1000 * 60 * 60 * 24));
	const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((difference % (1000 * 60)) / 1000);

	return {
		days: Math.max(0, days),
		hours: Math.max(0, hours),
		minutes: Math.max(0, minutes),
		seconds: Math.max(0, seconds)
	};
}

export function generateRandomChar(): string {
	const possibleChars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-';
	const randomCharIndex: number = Math.floor(Math.random() * possibleChars.length);
	return possibleChars.charAt(randomCharIndex);
}

export function generateInitialLetters(targetLetter: string): string[] {
	const letters: string[] = [targetLetter];
	for (let i = 0; i < 5; i++) {
		letters.unshift(generateRandomChar());
	}
	return letters;
}

export function getInitialDate(): Date {
	const date = new Date();
	// Add 3 seconds to prevent sudden jumps
	return new Date(date.getTime() + 3000);
}
