<!--
    This is a ready-to-go component that you can use in your
    login and register pages. It handles the form and the
    authentication flow for you. You can customize it to
    fit your needs.
-->

<script lang="ts">
	import { Button, InputText, Checkbox } from '$lib/components';
	import { Icon, ExclamationCircle } from 'svelte-hero-icons';

	enum AuthMode {
		LOGIN = 'login',
		REGISTER = 'register'
	}

	export let mode: AuthMode = AuthMode.LOGIN;
	export let form = {
		message: ''
	};
</script>

<div class="flex min-h-full flex-col justify-center bg-base-200 py-12 sm:px-6 lg:px-8">
	<!-- Header with title and your logo -->
	<header class="sm:mx-auto sm:w-full sm:max-w-md">
		<enhanced:img class="mx-auto h-10 w-auto" src="$lib/assets/logo.svg" />

		<h2 class="mt-6 text-center text-3xl font-semibold leading-9">
			{mode === AuthMode.LOGIN ? 'Sign in to your account' : 'Create your account'}
		</h2>
	</header>

	<!-- Main content and the form-->
	<main class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
		<div class="bg-base-100 px-6 py-10 shadow sm:rounded-lg sm:px-12">
			{#if form?.message}
				<div class="mb-6 flex items-center gap-2 rounded bg-error p-4 text-error-content">
					<Icon src={ExclamationCircle} class="h-5 w-5" />
					<p class="text-sm font-bold">
						{form?.message}
					</p>
				</div>
			{/if}

			<form
				class="flex flex-col gap-y-6"
				action={mode === AuthMode.LOGIN ? '?/login' : '?/signup'}
				method="POST">
				<InputText
					id="email"
					name="email"
					type="email"
					placeholder="Your email address"
					autocomplete="email"
					required
					label="Email" />

				<InputText
					id="password"
					name="password"
					type="password"
					autocomplete="current-password"
					placeholder="Choose your password"
					required
					label="Password" />

				{#if mode === AuthMode.REGISTER}
					<InputText
						id="confirm-password"
						name="password"
						type="password"
						placeholder="Confirm your password"
						required
						label="Confirm password" />
				{:else}
					<div class="flex items-center justify-between">
						<Checkbox
							id="remember-me"
							name="remember-me"
							label="Remember me"
							inputClass="text-sm"
							labelClass="text-sm" />

						<div class="leading-6">
							<a href="#" class="text-sm font-semibold text-primary hover:text-secondary">
								Forgot password?
							</a>
						</div>
					</div>
				{/if}

				<Button type="submit" class="btn-primary w-full">
					{mode === AuthMode.LOGIN ? 'Sign in' : 'Sign up'}
				</Button>
			</form>

			<div>
				<div class="relative mt-10">
					<div class="absolute inset-0 flex items-center">
						<div class="w-full border-t border-gray-200"></div>
					</div>
					<div class="relative flex justify-center text-sm font-medium leading-6">
						<span class="bg-base-100 px-6">Or continue with</span>
					</div>
				</div>

				<div class="mt-6 grid grid-cols-2 gap-4">
					<form action="?/loginWithGoogle" method="POST">
						<Button type="submit" class="w-full">
							<enhanced:img src="$lib/assets/icons/google.svg" class="h-5 w-5" />
							<span class="text-sm font-semibold leading-6">Google</span>
						</Button>
					</form>

					<form action="?/loginWithGithub" method="POST">
						<Button type="submit" class="w-full">
							<enhanced:img src="$lib/assets/icons/github.svg" class="h-6 w-6" />
							<span class="text-sm font-semibold leading-6">Github</span>
						</Button>
					</form>
				</div>
			</div>
		</div>

		{#if mode === AuthMode.LOGIN}
			<p class="mt-10 text-center text-sm">
				Not a member?
				<a
					href="/auth/register"
					class="font-semibold leading-6 text-primary hover:text-secondary">
					Register.
				</a>
			</p>
		{:else}
			<p class="mt-10 text-center text-sm">
				Already a member?
				<a
					href="/auth/login"
					class="font-semibold leading-6 text-primary hover:text-secondary">
					Sign in.
				</a>
			</p>
		{/if}
	</main>
</div>
