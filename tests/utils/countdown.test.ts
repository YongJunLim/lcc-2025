import { describe, it, expect } from 'vitest';
import {
	eventStarted,
	countdown,
	generateRandomChar,
	generateInitialLetters
} from '$lib/utils/countdown';
import { EVENT_DATETIME } from '$lib/constants/dates';

describe('countdown utils', () => {
	describe('eventStarted', () => {
		it('should return false for dates before event', () => {
			const now = new Date(EVENT_DATETIME);
			now.setDate(now.getDate() - 1);
			expect(eventStarted(now)).toBe(false);
		});

		it('should return true for dates after event', () => {
			const now = new Date(EVENT_DATETIME);
			now.setDate(now.getDate() + 1);
			expect(eventStarted(now)).toBe(true);
		});
	});

	describe('countdown', () => {
		it('should calculate correct time difference', () => {
			const now = new Date(EVENT_DATETIME);
			now.setDate(now.getDate() - 1);
			const result = countdown(now);

			expect(result).toEqual({
				days: 1,
				hours: 0,
				minutes: 0,
				seconds: 0
			});
		});

		it('should return zeros when event has passed', () => {
			const now = new Date(EVENT_DATETIME);
			now.setDate(now.getDate() + 1);
			const result = countdown(now);

			expect(result).toEqual({
				days: 0,
				hours: 0,
				minutes: 0,
				seconds: 0
			});
		});
	});

	describe('generateRandomChar', () => {
		it('should generate a valid character', () => {
			const char = generateRandomChar();
			expect(char).toMatch(/[A-Z0-9-]/);
		});
	});

	describe('generateInitialLetters', () => {
		it('should generate correct number of letters', () => {
			const letters = generateInitialLetters('A');
			expect(letters).toHaveLength(6);
			expect(letters[letters.length - 1]).toBe('A');
		});
	});
});
