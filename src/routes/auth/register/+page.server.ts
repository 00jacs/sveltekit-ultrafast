import type { Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { logger } from '$lib/utils/logger';

export const actions: Actions = {
	signup: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;
		const confirmPassword = formData.get('confirmPassword') as string;

		const validate = () => {
			let errorMessage = '';
			if (!email) errorMessage = 'Email is required';
			if (!password) errorMessage = 'Password is required';
			if (!confirmPassword) errorMessage = 'Confirm password is required';
			if (password != confirmPassword) errorMessage = 'Passwords do not match';
			return errorMessage;
		};

		const errorMessage = validate();
		if (errorMessage) return fail(400, { message: errorMessage });

		const { error } = await supabase.auth.signUp({ email, password });

		if (error) {
			logger.warn('[auth] Could not register the user: ', error);
			return fail(400, { message: error.message });
		} else {
			logger.success('[auth] User registered successfully; email: ' + email);
			return redirect(303, '/');
		}
	}
};
