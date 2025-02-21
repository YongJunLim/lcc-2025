import { createClient, SupabaseClient } from '@supabase/supabase-js';
import type { SupabaseClientOptions } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

export function getSupabaseClient(options?: SupabaseClientOptions): SupabaseClient {
	return createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, options);
}
