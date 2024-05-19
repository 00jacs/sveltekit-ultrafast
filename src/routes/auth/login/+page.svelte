<script lang="ts">
	import AuthPage from '$lib/components/page/auth/auth-page.svelte';

	enum AuthMode {
		LOGIN = 'login',
		REGISTER = 'register'
	}
</script>

<AuthPage mode={AuthMode.LOGIN} />
