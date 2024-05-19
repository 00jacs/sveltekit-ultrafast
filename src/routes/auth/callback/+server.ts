import { redirect } from '@sveltejs/kit';
import { logger } from '$lib/utils/logger';

export const GET = async (event) => {
	logger.info('[auth] Received auth callback event: ', event);

	const {
		url,
		locals: { supabase }
	} = event;
	const code = url.searchParams.get('code') as string;
	const next = url.searchParams.get('next') ?? '/';

	if (code) {
		const { error } = await supabase.auth.exchangeCodeForSession(code);
		if (!error) {
			logger.success('[auth] User logged in successfully.');
			return redirect(303, `/${next.slice(1)}`);
		}
	}

	// error page with instructions
	logger.error('[auth] Could not log in the user - showing instructions.');
	return redirect(303, '/auth/error');
};
