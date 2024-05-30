# Blog 📖

If you want to target a specific SEO keyword, writing a few blog posts on your page will definitely help you gain traffic and thus, test your idea more thoroughly.

In this example, we use [**Contentful**](https://www.contentful.com/), but you can use any other headless CMS (like Sanity). Setting this up should not take a lot of time.

## Why Contentful?

Contentful has a free plan which allows 1 million API calls a month, which should be sufficient for most projects. Additionally, it's easy to set up.

## How does it work?

On the `/blog` page we send a request to our CMS to get all the entries (but only the headlines, excerpts and slugs).

With this, we can display a list of blog posts (I've limited it to 3, but you should adjust all of that to your needs).

On the `/blog/[slug]` page, we send a request to our CMS based on the **slug** provided to get all the fields for a particular post.

Then, we display the post's content with `@contentful/rich-text-html-renderer` and `@tailwindcss/typography`.

## How to set up?

1. Create your Contentful account.
2. Create a "content type" of a blog post:
   - headline (short text)
   - excerpt (short text)
   - slug (short text)
   - publish date (date)
   - content (rich text)
   - show (boolean)
3. (optional) Blog post can also have `author` and `category` fields which could be displayed.
4. Fill in your `.env` with `PRIVATE_CONTENTFUL_SPACE` and `PRIVATE_CONTENTFUL_ACCESS_TOKEN` which you can find in your Contetful developer dashboard.
5. Create an example blog post.

## In the future

In the upcoming future, I plan to add Sanity integration as well. Also, a page dedicated to each blog author will be there with an avatar, name, bio, and a list of articles.
