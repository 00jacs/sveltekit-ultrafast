<script lang="ts">
	export let title: string;
	export let subtitle: string;
</script>

<h1 class="text-3xl font-bold lg:text-5xl">{title}</h1>
<p class="text-base-content-secondary mb-8">{subtitle}</p>

<slot />
