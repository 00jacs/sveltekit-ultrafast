<script lang="ts">
	import { DocsCode, DocsPage } from '$lib/components/page/docs';
</script>

<DocsPage
	title="Blog"
	subtitle="This page will give you everything you need to create
        your own blog posts and put them on your website.">
	<p class="mb-8">
		The authentication flow in this boilerplate is powered by
		<a href="https://contentful.com/" target="_blank" class="link link-primary">
			Contentful.
		</a>
		It is a popular headless CMS with a free plan that allows you to create and manage your
		content.
	</p>

	<div class="mb-12">
		<h2 class="mb-4 text-xl font-bold text-base-content">
			Step 1: create your Contentful account
		</h2>

		<p class="mb-4">
			In order to start, you need to create a Contentful account. You can do that
			<a
				href="https://www.contentful.com/get-started/"
				target="_blank"
				class="link link-primary">
				here.
			</a>
		</p>
	</div>

	<div class="mb-12">
		<h2 class="mb-4 text-xl font-bold text-base-content">
			Step 2: create your content types
		</h2>

		<p class="mb-4">
			After you have created an account, you need to create a "content model" which is a
			blueprint for your content. You can create a content type for your blog posts and
			add fields like title, excerpt, slug, body, image, author, tags, etc.
		</p>

		<p>In our example, the content model looks like this:</p>

		<ul class="ml-2">
			<li>- title: text</li>
			<li>- excerpt: text</li>
			<li>- slug: text</li>
			<li>- body: rich text</li>
			<li>- image: media</li>
			<li>- author: reference</li>
			<li>- category: reference</li>
		</ul>
	</div>

	<div class="mb-12">
		<h2 class="mb-4 text-xl font-bold text-base-content">Step 3: get the API keys</h2>

		<p class="mb-4">
			After you have created a project, you need to get the API keys and fill in the
			`.env` file in the root of the project.
		</p>

		<DocsCode
			language="bash"
			code={`
PRIVATE_CONTENTFUL_SPACE="your contentful space id"
PRIVATE_CONTENTFUL_ACCESS_TOKEN="your contentful access key"
        `} />
	</div>

	<div class="mb-12">
		<h2 class="mb-4 text-xl font-bold text-base-content">
			Step 4: create your first blog post
		</h2>

		<p class="mb-4">
			Create an example blog post in your Contentful account. Fill in the fields with some
			example data and publish the post.
		</p>

		<p>
			You can fetch the blog post by slug using the `getBlogPostBySlug` function from the
			`routes/blog/contentful.ts` file.
		</p>
	</div>

	<p>
		Take a look at the `/routes/blog/[slug]` route to see how the blog posts are fetched
		and displayed on the website.
	</p>
</DocsPage>
