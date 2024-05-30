import { fail } from '@sveltejs/kit';
import { client, type BlogPost } from '../contentful';

export async function load({ params }) {
	try {
		const response = await client.getEntries<BlogPost>({
			content_type: 'blog-post',
			limit: 1,
			'fields.slug': params.slug,
			'fields.show': true
		});

		return {
			post: response?.items?.[0]
		};
	} catch (e) {
		return fail(404, { message: 'Not found' });
	}
}
