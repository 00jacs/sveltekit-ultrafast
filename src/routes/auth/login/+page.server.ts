import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';
import { PUBLIC_DOMAIN_URL } from '$env/static/public';
import { logger } from '$lib/utils/logger';

export const actions: Actions = {
	login: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		const { error } = await supabase.auth.signInWithPassword({ email, password });

		if (error) {
			logger.info('[auth] Coud not log in the user: ', error);
			return redirect(303, '/auth/error');
		} else {
			logger.success('[auth] User logged in successfully; email: ' + email);
			return redirect(303, '/private');
		}
	},
	loginWithGoogle: async ({ locals: { supabase } }) => {
		const { data, error: err } = await supabase.auth.signInWithOAuth({
			provider: 'google',
			options: {
				redirectTo: `${PUBLIC_DOMAIN_URL}/auth/callback`
			}
		});

		if (err) {
			logger.warn('[auth] Could not log in the user with Google: ', err);
			return redirect(303, '/auth/error');
		}

		if (data.url) {
			logger.success('[auth] User logged in successfully with Google: ', data.url);
			return redirect(302, data.url);
		}
	},
	loginWithGitHub: async ({ locals: { supabase } }) => {
		const { data, error: err } = await supabase.auth.signInWithOAuth({
			provider: 'github',
			options: {
				redirectTo: `${PUBLIC_DOMAIN_URL}/auth/callback`
			}
		});

		if (err) {
			logger.warn('[auth] Could not log in the user with GitHub: ', err);
			return redirect(303, '/auth/error');
		}

		if (data.url) {
			logger.success('[auth] User logged in successfully with GitHub: ', data.url);
			return redirect(302, data.url);
		}
	}

	/**
	 * NOTE: You can easily add more login methods here
	 * loginWithFacebook, loginWithX, etc.
	 * Docs: https://supabase.com/docs/guides/auth#social-auth
	 */
};
