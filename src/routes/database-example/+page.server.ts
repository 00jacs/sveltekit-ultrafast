import { supabase } from '$lib/supabase';
import { fail, type Actions } from '@sveltejs/kit';
import { logger } from '$lib/utils/logger';
import z from 'zod';
import { zfd } from 'zod-form-data';
import { formDataToObject } from '$lib/utils/form';

export async function load() {
	// The requests are fully typed (no need to cast the response)
	// unless you did not generate the "database.d.ts" file yet (see docs.md).
	const { data } = await supabase.from('countries').select();

	return {
		countries: data ?? []
	};
}

/**
 * VALIDATION: Validation schema for the form data.
 * The zod-form-data package is used to validate the form data.
 * But you can use any other validation library.
 * This helps to ensure that the data is valid before it is sent to the database.
 * This could be done on the client-side as well, but for simplicity
 * and for the purpose of rapid development, it is done only here.
 */

const CountryCreateSchema = zfd.formData({
	name: zfd.text(z.string().min(2, 'Name must be at least 2 characters long')),
	iso2: zfd.text(z.string().length(2, 'ISO2 must be exactly 2 characters long')),
	iso3: zfd.text(z.string().length(3, 'ISO3 must be exactly 3 characters long'))
});

type CountryCreateSchema = z.infer<typeof CountryCreateSchema>;

export const actions: Actions = {
	createCountry: async ({ request }) => {
		const formData = await request.formData();
		let newCountry: CountryCreateSchema;

		try {
			newCountry = CountryCreateSchema.parse(formData);
		} catch (e) {
			logger.info('[database-example] Invalid form data: ', e);
			return fail(400, {
				message: 'Invalid form data',
				errors: e instanceof z.ZodError ? e.flatten() : null,
				formData: formDataToObject<CountryCreateSchema>(formData)
			});
		}

		const { data, error } = await supabase
			.from('countries')
			.insert({ ...newCountry })
			.select();

		if (error) {
			// probably need to make the message more user-friendly
			logger.info('[database-example] Could not create the country: ', error);
			return fail(400, {
				message: error.message,
				errors: null,
				formData: formDataToObject<CountryCreateSchema>(formData)
			});
		}

		logger.success('[database-example] Country created successfully: ', data);
		return { success: true };
	}
};
