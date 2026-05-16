# Copilot Instructions

## Project Overview

This is a Svelte 5 + Vite trip itinerary app for the Creamer family's Paris + Barcelona 2026 trip. Trip data lives in `src/lib/data/` as JS modules. Components are in `src/lib/components/`.

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build to `dist/`
- `npm run scrape:maps <url>` — Scrape a Google Maps list (see below)

## Google Maps List Scraper

When the user wants to import places from a Google Maps shared list URL:

1. Run `npm run scrape:maps "<google-maps-list-url>"` to extract place names, categories, and ratings
2. The script outputs JSON to stdout. Use the results to update `src/lib/data/restaurants.js` or the relevant data file
3. Skip non-restaurant entries (stores, landmarks, beaches) unless the user says otherwise
4. Deduplicate against existing entries before adding
5. New entries won't have a `tip` field — set it to a short description based on the category, or leave it as an empty string for the user to fill in later

### Prerequisites

The scraper requires Playwright with Chromium:
```
npm install --save-dev playwright
npx playwright install chromium
```
