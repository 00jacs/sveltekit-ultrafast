<script lang="ts">
	export let title: string;
	export let subtitle: string = '';
</script>

<article class="max-w-2xl pb-16">
	<h1 class="mb-2 text-3xl font-bold lg:text-5xl">{title}</h1>

	{#if subtitle}
		<p class="text-base-content-secondary">{subtitle}</p>
	{/if}

	<div class="divider mb-8"></div>

	<div class="text-base-content-secondary">
		<slot />
	</div>
</article>
