# Google Analytics 📈

Without analytics, you know nothing about the traffic on your website.

_What you don't track, you can' improve._

## How to set up?

Setting it up is super easy:

1. Create a Google Analytics project.
2. Add your `PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID` as `.env`.

And you should be good to go! 🎉

## Custom analytics events

The `/analytics` route shows how you can track custom events with `gtag` and Google Analytics.

But the super basic setup will still allow you to track page views on each of your pages which is also going to be super useful.

## Alternative - Plausible analytics

This example route shows a custom Google Analytics event, but on the [docs] (https://sveltekit-ultrafast.com/docs/features/analytics) page you can find a guide on how to set up Plausbile Analytics as well (which is recommended for privacy & cookie reasons). It's also simpler to set up.
