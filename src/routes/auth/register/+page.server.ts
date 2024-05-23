import type { Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { logger } from '$lib/utils/logger';
import z from 'zod';
import { zfd } from 'zod-form-data';
import { formDataToObject } from '$lib/utils/form';

/**
 * VALIDATION: we will validate our form data
 * using zod and zod-form-data; you can skip this step
 * if you don't need/want validation and you want to
 * fasten the process even more, but usually validation
 * is a good practice (even in prototypes).
 */
const RegisterUserSchema = zfd
	.formData({
		email: zfd.text(z.string().email('Invalid email address')),
		password: zfd.text(z.string().min(6, 'At least 6 characters')),
		confirmPassword: zfd.text(z.string())
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Passwords do not match',
		path: ['confirmPassword']
	});

type RegisterUserSchema = z.infer<typeof RegisterUserSchema>;

/**
 * ACTIONS: we will define our actions here
 * these are the actions that will be called
 * when the user submits the form.
 */
export const actions: Actions = {
	signup: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		let user: RegisterUserSchema;

		try {
			user = RegisterUserSchema.parse(formData);
		} catch (e) {
			logger.info('[auth] Invalid form data: ', e);
			return fail(400, {
				message: 'Invalid form data',
				errors: e instanceof z.ZodError ? e.flatten() : null,
				formData: formDataToObject<RegisterUserSchema>(formData)
			});
		}

		const { error } = await supabase.auth.signUp({
			...user
		});

		if (error) {
			logger.warn('[auth] Could not register the user: ', error);
			return fail(400, { message: error.message });
		} else {
			logger.success('[auth] User registered successfully; email: ' + user.email);
			return redirect(303, '/register/confirmation');
		}
	}
};
