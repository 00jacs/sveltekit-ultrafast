import { fail } from '@sveltejs/kit';
import { getPostBySlug } from '../contentful';

export async function load({ params }) {
	try {
		const response = await getPostBySlug(params.slug);

		return {
			post: response?.items?.[0]
		};
	} catch (e) {
		return fail(404, { message: 'Not found' });
	}
}
