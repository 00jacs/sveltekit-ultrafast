<script lang="ts">
	import AuthPage from '$lib/components/page/auth/auth-page.svelte';

	enum AuthMode {
		LOGIN = 'login',
		REGISTER = 'register'
	}

	export let form;
</script>

<!-- @TODO: Solve this TypeScript issue -->
<AuthPage mode={AuthMode.LOGIN} {form} />
