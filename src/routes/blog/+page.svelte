<script lang="ts">
	import { Icon, BookOpen } from 'svelte-hero-icons';

	export let data;
</script>

<div class="mx-auto my-6 max-w-5xl px-4 py-12">
	{#if data.posts}
		<div class="flex items-center justify-center gap-4">
			{#each data.posts as post}
				<article class="mb-6 max-w-64 rounded-box border border-base-200 px-6 py-6">
					<h2 class="mb-4 text-lg font-semibold leading-6 tracking-tight">
						{post.headline}
					</h2>

					<p class="text-base-content-secondary mb-4 text-sm leading-5">{post.excerpt}</p>

					<a href={`/blog/${post.slug}`} class="btn btn-outline ml-auto border-base-200">
						<div class="flex items-center justify-end gap-2">
							<span class="block"> Read more </span>
							<Icon src={BookOpen} class="mt-[0.8px] h-4 w-4" />
						</div>
					</a>
				</article>
			{/each}
		</div>
	{:else}
		<div class="text-center">
			<p class="mb-2 text-center text-2xl font-semibold">No posts found yet...</p>
			<p class="text-base-content-secondary">Stay tuned!</p>
		</div>
	{/if}
</div>
