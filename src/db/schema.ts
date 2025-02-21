import { sql } from 'drizzle-orm';
import {
	pgTable,
	pgPolicy,
	smallserial,
	text,
	uuid,
	timestamp,
	smallint,
	pgSchema
} from 'drizzle-orm/pg-core';

export const apiSchema = pgSchema('api');
export const roles = apiSchema.enum('role', ['power_automate', 'godot']);

export const accountsTable = apiSchema.table('accounts', {
	id: uuid('id').primaryKey(),
	user_id: uuid('user_id').notNull(),
	email: text('email').notNull(),
	role: roles('role').notNull(),
	created_at: timestamp('created_at').notNull().defaultNow()
});

export const votedPosterParticipantsTable = pgTable(
	'voted_poster_participants',
	{
		id: smallserial('id').primaryKey(),
		student_id: text('student_id').notNull().unique(),
		form_response_id: smallint('form_response_id').notNull(),
		passcode: smallint('passcode').notNull(),
		submit_time: timestamp('submit_time').notNull()
	},
	(table) => [
		pgPolicy('insert_poster_votes', {
			for: 'insert',
			to: 'public',
			withCheck: sql`EXISTS (
      SELECT 1 FROM api.accounts
      WHERE id = (current_setting('request.headers', true)::json->>'x-app-api-key')::uuid
      AND role = 'power_automate'
    )`
		}),
		pgPolicy('select_poster_votes', {
			for: 'select',
			to: 'public',
			using: sql`EXISTS (
      SELECT 1 FROM api.accounts
      WHERE id = (current_setting('request.headers', true)::json->>'x-app-api-key')::uuid
      AND role IN ('power_automate', 'godot')
    )`
		})
	]
);

export const earlyRegisteredParticipantsTable = pgTable(
	'early_registered_participants',
	{
		id: smallserial('id').primaryKey(),
		student_id: text('student_id').notNull().unique(),
		form_response_id: smallint('form_response_id').notNull(),
		submit_time: timestamp('submit_time').notNull()
	},
	(table) => [
		pgPolicy('select_early_registrations', {
			for: 'select',
			to: 'public',
			using: sql`EXISTS (
      SELECT 1 FROM api.accounts
      WHERE id = (current_setting('request.headers', true)::json->>'x-app-api-key')::uuid
      AND role = 'godot'
    )`
		})
	]
);

export const completedGameParticipantsTable = pgTable(
	'completed_game_participants',
	{
		id: smallserial('id').primaryKey(),
		student_id: text('student_id').notNull().unique(),
		additional_lucky_draw_chances: smallint('additional_lucky_draw_chances').notNull().default(0),
		completed_game_time: timestamp('completed_game_time').notNull(),
		score: smallint('score').notNull()
	},
	(table) => [
		pgPolicy('insert_game_scores', {
			for: 'insert',
			to: 'public',
			withCheck: sql`EXISTS (
      SELECT 1 FROM api.accounts
      WHERE id = (current_setting('request.headers', true)::json->>'x-app-api-key')::uuid
      AND role = 'godot'
    )`
		}),
		pgPolicy('select_game_scores', {
			for: 'select',
			to: 'public',
			using: sql`EXISTS (
      SELECT 1 FROM api.accounts
      WHERE id = (current_setting('request.headers', true)::json->>'x-app-api-key')::uuid
      AND role = 'godot'
    )`
		})
	]
);

export type InsertScore = typeof completedGameParticipantsTable.$inferInsert;
export type VerifyVote = typeof votedPosterParticipantsTable.$inferSelect;
export type verifyEarlyReg = typeof earlyRegisteredParticipantsTable.$inferSelect;
