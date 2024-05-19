# Authentication 🙋🏽

The authentication uses the [Supabase Authentication](https://supabase.com/docs/guides/auth) which automatically takes care of most security issues and makes it effortless to create & manage users in your applications - which is valuable if you want to be **ultrafast**.

## How to set it up?

In order to set up the authentication, you need to have a Supabase project active and fill in the proper keys in your `.env`:

- `PUBLIC_DOMAIN_URL` - your domain url
- `PUBLIC_SUPABASE_URL` - URL to your Supabase project
- `PUBLIC_SUPABASE_ANON_KEY` - API key to your Supabase project

Once you have those, you should be good to go 👇

## Logging in

There is a sample `/auth/login` route implemented. There is a simple form with `email` and `password`.

### Social providers

There are also two examples of logging in with Social Providers (Google, GitHub) but it's easy to extend that and add more providers.

In order to do that, go to your project Authentication dashboard and then go to "Providers" and fill in the necessary keys.

Here is a full list of available providers: https://supabase.com/docs/guides/auth/social-login

## Logging out

There is a `POST` endpoint on the `/auth/logout` route which should sign out the user.

## Signing up

There is a `/auth/register` route which is very similar to the login route. The only difference is that there is an additional confirm password field.

## Error page [in progress]

There is also a `/auth/error` page which shows up after the user has failed to log in (for example, through external providers).

We should display a nice error message with support CTA and instructions on possible resolution.
