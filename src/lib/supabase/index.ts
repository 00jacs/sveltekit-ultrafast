import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

import type { Database, Tables, TablesInsert, TablesUpdate } from './database';

export const supabase = createClient<Database>(
	PUBLIC_SUPABASE_URL,
	PUBLIC_SUPABASE_ANON_KEY
);

// Re-export the database-related types for convenience
export type { Database, Tables, TablesInsert, TablesUpdate };

export default supabase;
