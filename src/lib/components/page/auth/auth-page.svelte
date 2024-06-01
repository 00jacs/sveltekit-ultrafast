<!--
    This is a ready-to-go component that you can use in your
    login and register pages. It handles the form and the
    authentication flow for you. You can customize it to
    fit your needs.
-->

<script lang="ts">
	import { enhance } from '$app/forms';
	import { Button, InputText, Checkbox } from '$lib/components';
	import { Icon, ExclamationCircle } from 'svelte-hero-icons';
	import z from 'zod';

	enum AuthMode {
		LOGIN = 'login',
		REGISTER = 'register'
	}

	export let mode: AuthMode = AuthMode.LOGIN;
	export let form: {
		message: string;
		errors:
			| z.typeToFlattenedError<{
					email: string;
					password: string;
					confirmPassword: string;
			  }>
			| undefined;
	} = {
		message: '',
		errors: undefined
	};
</script>

<div class="flex min-h-full flex-col justify-center px-8 py-10 sm:px-6">
	<!-- Header with title and your logo -->
	<header class="sm:mx-auto sm:w-full sm:max-w-md">
		<!-- @DO: Your logo here
        <enhanced:img
            class="h-6 w-auto"
            src="$lib/assets/logo.svg"
            alt="@DO: Fill your company name" />
        -->

		<h2 class="mt-6 text-center text-3xl font-semibold leading-9">
			{mode === AuthMode.LOGIN ? 'Sign in to your account' : 'Create your account'}
		</h2>
	</header>

	<!-- Main content and the form-->
	<main class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
		<div
			class="rounded-lg border border-base-200 bg-white bg-opacity-[2%] px-6 py-10 shadow sm:px-12">
			{#if form?.message}
				<div class="mb-6 flex gap-2 rounded text-error">
					<Icon src={ExclamationCircle} class="h-5 w-5" />
					<p class="text-sm font-bold">
						{form?.message}
					</p>
				</div>
			{/if}

			<form
				class="flex flex-col gap-y-6"
				action={mode === AuthMode.LOGIN ? '?/login' : '?/signup'}
				method="POST"
				use:enhance>
				<InputText
					id="email"
					name="email"
					type="email"
					placeholder="Your email address"
					autocomplete="email"
					required
					label="Email"
					error={form?.errors?.fieldErrors?.email?.[0]} />

				<InputText
					id="password"
					name="password"
					type="password"
					autocomplete="current-password"
					placeholder="Choose your password"
					required
					label="Password"
					error={form?.errors?.fieldErrors?.password?.[0]} />

				{#if mode === AuthMode.REGISTER}
					<InputText
						id="confirmPassword"
						name="confirmPassword"
						type="password"
						placeholder="Confirm your password"
						required
						label="Confirm password"
						error={form?.errors?.fieldErrors?.confirmPassword?.[0]} />
				{:else}
					<div class="flex items-center justify-between">
						<Checkbox
							id="remember-me"
							name="remember-me"
							label="Remember me"
							inputClass="text-sm"
							labelClass="text-sm" />

						<div class="leading-6">
							<a href="#" class="link link-primary text-sm font-semibold no-underline">
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
						<div class="w-full border-t border-base-300"></div>
					</div>
					<div class="relative flex justify-center text-sm font-medium leading-6">
						<span class="bg-base-100 px-6">Or continue with</span>
					</div>
				</div>

				<div class="mt-6 grid grid-cols-2 gap-4">
					<form action="?/loginWithGoogle" method="POST">
						<Button type="submit" class="w-full border-base-300">
							<enhanced:img src="$lib/assets/icons/google.svg" class="h-5 w-5" />
							<span class="text-sm font-semibold leading-6">Google</span>
						</Button>
					</form>

					<form action="?/loginWithGithub" method="POST">
						<Button type="submit" class="w-full border-base-300">
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
					class="link link-primary font-semibold leading-6 no-underline">
					Register.
				</a>
			</p>
		{:else}
			<p class="mt-10 text-center text-sm">
				Already a member?
				<a href="/auth/login" class="link link-primary leading-6 no-underline">
					Sign in.
				</a>
			</p>
		{/if}
	</main>
</div>
