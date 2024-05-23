# Database 🫙

For this boilerplate, we use [Supabase PostgreSQL](https://supabase.com/docs/guides/getting-started/quickstarts/sveltekit) to store data related to our application.

## Why?

The free tier is pretty wide, meaning that for small apps the cost should be relatively small or even 0.

Also, it's super fast & easy to set up + very smooth to develop.

- Supabase handles all the migrations for you
- Supabase handles most security issues for you
- Supabase provides you with a simple ORM specific to your DB
- Supabase gives full type safety
- it's easy to use within a SvelteKit application
- automatic type generation

## How to set it up?

### 1. Create your database

Once you know what kind of data you would like to store for your application, you can create a table for it, following this guide: https://supabase.com/docs/guides/database/overview

It should be pretty straightforward, but if you have never done it, this guide + video explain it well: https://supabase.com/docs/guides/database/tables

### 2. Generate TypeScript types

If you'd like Supabase types to be generated automatically, you should follow these steps:

1. Read this guide: https://supabase.com/docs/guides/api/rest/generating-types
2. Install Supabase CLI and log in to your account
3. Go to your Supabase panel -> Project settings -> General and copy the "Reference ID", you will need it in order to set up automatic type generation.
4. Copy the "Reference ID" and paste it into "$PROJECT_REF" space in `package.json` within the `update-types` method.
5. You should now be able to run the `npm run update-types` method which should create a database.d.ts file (the current file is just a sample temporary file so feel free to override it).

Now, after that, your database queries should be fully typed. You should run `npm run update-types` after each change in your Supabase database.

### 3. Load your data!

You can query your data similarly to how you would do it with SQL:

```TypeScript
await supabase.from('countries').select()
```

Here's a list of all the queries and how to use them: https://supabase.com/docs/reference/javascript/select

### 4. Insert/update your data

You can follow the example form of creating a country which shows how to insert entries into database.

Most likely, more validation before insertion should be implemented, but it's just a simple example.

For additional validation, you could use [zod](https://zod.dev/) which is a great library for it.

### 5. Additional form validation

Here's a code snippet also included in the example:

```TypeScript
const CountryCreateSchema = zfd.formData({
	name: zfd.text(z.string().min(2, 'Name must be at least 2 characters long')),
	iso2: zfd.text(z.string().length(2, 'ISO2 must be exactly 2 characters long')),
	iso3: zfd.text(z.string().length(3, 'ISO3 must be exactly 3 characters long'))
});

which allows you to define your custom validation schemas for your forms with custom error messages which will show up to the user next to each form field.

```
