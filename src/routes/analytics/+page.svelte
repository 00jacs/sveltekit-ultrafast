<script lang="ts">
	import { Button, notify } from '$lib/components';

	let counter = 0;

	function handleClick() {
		if (typeof window.gtag !== 'undefined') {
			window.gtag('event', 'click', {
				event_category: 'button',
				event_label: 'signup_button',
				value: 1
			});

			notify('success', 'Custom event logged in Google Analytics.');
			counter++;
		} else {
			notify('error', 'Google Analytics has not been loaded/configured.');
		}
	}
</script>

<div class="mx-auto my-4 max-w-xl px-4 py-10">
	<h1 class="mb-4 text-3xl font-bold">Custom analytics event</h1>

	<p class="mb-2">Clicked: {counter} times</p>

	<Button on:click={handleClick} class="btn-primary mb-4">
		Click me to log a custom event in Analytics
	</Button>

	<p class="text-base-content-secondary text-sm">
		You can go to your Google Analytics dashboard and check your custom event being
		triggered after each click.
	</p>
</div>
