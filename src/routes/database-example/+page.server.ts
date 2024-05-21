import { supabase } from '$lib/supabase';
import { redirect, fail, type Actions } from '@sveltejs/kit';
import { logger } from '$lib/utils/logger';

export async function load() {
	// The requests are fully typed (no need to cast the response)
	// unless you did not generate the "database.d.ts" file yet (see docs.md).
	const { data } = await supabase.from('countries').select();

	return {
		countries: data ?? []
	};
}

export const actions: Actions = {
	createCountry: async ({ request }) => {
		const formData = await request.formData();

		const name = formData.get('name') as string;
		const iso2 = formData.get('iso2') as string;
		const iso3 = formData.get('iso3') as string;

		console.log('name: ', name);

		const { data, error } = await supabase
			.from('countries')
			.insert({
				name,
				iso2,
				iso3
			})
			.select();

		if (error) {
			// probably need to make the message more user-friendly
			logger.info('[database-example] Could not create the country: ', error);
			return fail(400, { message: error.message });
		}

		logger.success('[database-example] Country created successfully: ', data);
		return redirect(303, '/database-example');
	}
};
