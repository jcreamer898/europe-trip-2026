Copilot generated web site for our summer trip!

## Local preview

```sh
npx http-server .
```

Open the local URL printed by `http-server`, usually `http://127.0.0.1:8080`.

## Offline use

This site is configured as a small progressive web app. Before traveling, open
the site once while online so the browser can save the itinerary, images,
manifest, and service worker cache.

For the best phone experience, use the browser's share menu to add the site to
your home screen after the first online load.

## Offline verification

1. Run `npx http-server .`.
2. Open the site from the local server URL.
3. Open browser DevTools and confirm the service worker is registered.
4. Switch the browser to offline mode.
5. Reload the page. The itinerary, local images, and offline banner should still
   render.

External links, including maps and booking pages, may still require signal or
their own app-level offline cache.
