import logger from '$lib/utils/logger';
import { type BlogPost, client } from './contentful';

async function fetchRecentBlogPosts() {
	try {
		const entries = await client.getEntries<BlogPost>({
			content_type: 'blog-post',

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			select: ['fields.headline', 'fields.excerpt', 'fields.slug'] as any,

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			order: '-sys.createdAt' as any, // orders posts by creation date, newest first

			limit: 3 // limits the number of entries returned to 3
		});

		if (entries.items.length > 0) {
			return entries.items.map((post) => {
				return {
					headline: post.fields.headline,
					excerpt: post.fields.excerpt,
					slug: post.fields.slug
				};
			});
		} else {
			logger.warn('No blog posts found.');
			return [];
		}
	} catch (error) {
		logger.error(`Error fetching posts: ${error}`);
		return [];
	}
}

export async function load() {
	return {
		posts: await fetchRecentBlogPosts()
	};
}
