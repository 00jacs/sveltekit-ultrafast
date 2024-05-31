<script lang="ts">
	export let title: string;
	export let subtitle: string;
</script>

<h1 class="mb-2 text-3xl font-bold lg:text-5xl">{title}</h1>
<p class="text-base-content-secondary">{subtitle}</p>
<div class="divider mb-8"></div>

<div class="text-base-content-secondary max-w-2xl">
	<slot />
</div>
