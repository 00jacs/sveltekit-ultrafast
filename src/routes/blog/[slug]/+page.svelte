<script lang="ts">
	import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

	export let data;
</script>

{#if data.post}
	<article
		id="post-{data.post.fields.slug}"
		class="prose prose-lg mx-auto my-6 max-w-2xl p-5 px-4 py-10">
		<header>
			<h1 class="mb-3 text-3xl font-bold">{data.post.fields.headline}</h1>
			<p class="text-base-content-secondary">{data.post.fields.excerpt}</p>
		</header>

		<div class="divider"></div>

		<main id="blog-content">
			{@html documentToHtmlString(data.post.fields.content)}
		</main>
	</article>
{:else}
	<div class="mx-auto max-w-lg px-4 py-10">
		<h1 class="text-2xl">Post not found</h1>
		<p>Are you sure you are on the right page?</p>
	</div>
{/if}
