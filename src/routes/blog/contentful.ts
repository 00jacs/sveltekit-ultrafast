import contentful from 'contentful';
import {
	PRIVATE_CONTENTFUL_ACCESS_TOKEN,
	PRIVATE_CONTENTFUL_SPACE_ID
} from '$env/static/private';

export const client = contentful.createClient({
	space: PRIVATE_CONTENTFUL_SPACE_ID,
	accessToken: PRIVATE_CONTENTFUL_ACCESS_TOKEN,
	environment: 'master'
});

/**
 * This is where you define the types for the content model.
 * You can automatically generate these types if you prefer:
 * https://github.com/contentful-userland/cf-content-types-generator
 */

export interface BlogAuthor {
	contentTypeId: 'blogAuthor';
	fields: {
		name: contentful.EntryFieldTypes.Text;
		avatar?: contentful.EntryFieldTypes.AssetLink;
		bio?: contentful.EntryFieldTypes.Text;
	};
}

export interface BlogCategory {
	contentTypeId: 'blogCategory';
	fields: {
		name: contentful.EntryFieldTypes.Text;
		description?: contentful.EntryFieldTypes.Text;
	};
}

export interface BlogPost {
	contentTypeId: 'blog-post';
	fields: {
		headline: contentful.EntryFieldTypes.Text;
		excerpt: contentful.EntryFieldTypes.Text;
		slug: contentful.EntryFieldTypes.Text;
		content: contentful.EntryFieldTypes.RichText;
		publishDate: contentful.EntryFieldTypes.Date;
		seoMetadata: contentful.EntryFieldTypes.Object;
		category: contentful.EntryFieldTypes.EntryLink<BlogCategory>;
		author: contentful.EntryFieldTypes.EntryLink<BlogAuthor>;
		show: contentful.EntryFieldTypes.Boolean;
	};
}
