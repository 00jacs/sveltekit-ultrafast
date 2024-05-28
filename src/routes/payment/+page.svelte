<script lang="ts">
	// import PricingSection from '$lib/components/page/pricing/simple-one-time.svelte';
	import PricingSection from '$lib/components/page/pricing/multiple-plans.svelte';
</script>

<form action="?/checkout" method="POST">
	<PricingSection />
</form>
