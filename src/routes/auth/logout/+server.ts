import { error, redirect, type RequestHandler } from '@sveltejs/kit';
import { logger } from '$lib/utils/logger';

export const POST: RequestHandler = async ({ locals }) => {
	const { error: err } = await locals.supabase.auth.signOut();

	if (err) {
		logger.warn('[auth] Could not log out the user: ', err);
		return error(500, 'Something went wrong logging you out.');
	}

	logger.success('[auth] User logged out successfully.');
	return redirect(303, '/');
};
