import type { Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { PUBLIC_DOMAIN_URL } from '$env/static/public';
import { logger } from '$lib/utils/logger';
import z from 'zod';
import { zfd } from 'zod-form-data';
import { formDataToObject } from '$lib/utils/form';

const LoginUserSchema = zfd.formData({
	email: zfd.text(z.string().email('Invalid email address')),
	password: zfd.text(z.string().min(6, 'At least 6 characters'))
});

type LoginUserSchema = z.infer<typeof LoginUserSchema>;

export const actions: Actions = {
	login: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		let user: LoginUserSchema;

		try {
			user = LoginUserSchema.parse(formData);
		} catch (e) {
			logger.info('[auth] Invalid form data: ', e);
			return fail(400, {
				message: 'Invalid form data',
				errors: e instanceof z.ZodError ? e.flatten() : null,
				formData: formDataToObject<LoginUserSchema>(formData)
			});
		}

		const { error } = await supabase.auth.signInWithPassword({ ...user });

		if (error) {
			logger.info('[auth] Coud not log in the user: ', error);
			return fail(400, {
				message: 'Could not log in. Please check your email and password.',
				formData: formDataToObject<LoginUserSchema>(formData)
			});
		} else {
			logger.success('[auth] User logged in successfully; email: ' + user.email);
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
