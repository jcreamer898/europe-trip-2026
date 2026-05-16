#!/usr/bin/env node

/**
 * Google Maps List Scraper
 *
 * Extracts place names, categories, and ratings from a shared Google Maps list URL.
 * Uses Playwright to render the JavaScript-heavy Google Maps page.
 *
 * Usage:
 *   node scripts/scrape-maps-list.mjs <google-maps-list-url>
 *
 * Example:
 *   node scripts/scrape-maps-list.mjs "https://maps.app.goo.gl/AqnUU4yGMGvCJ1Yz7"
 *
 * Output: JSON array of { name, category, rating } objects printed to stdout.
 *
 * Prerequisites:
 *   npm install --save-dev playwright
 *   npx playwright install chromium
 */

import { chromium } from "playwright";

const url = process.argv[2];

if (!url) {
  console.error("Usage: node scripts/scrape-maps-list.mjs <google-maps-list-url>");
  process.exit(1);
}

async function scrapeMapsList(listUrl) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  console.error("Opening Google Maps list...");
  await page.goto(listUrl, { waitUntil: "domcontentloaded", timeout: 30000 });
  await page.waitForTimeout(5000);

  // Dismiss consent dialog if present
  try {
    const acceptBtn = page.locator('button:has-text("Accept all")');
    if (await acceptBtn.isVisible({ timeout: 2000 })) {
      await acceptBtn.click();
      await page.waitForTimeout(2000);
    }
  } catch {}

  // Scroll the list panel to load all items
  try {
    const scrollable = page.locator(".m6QErb.DxyBCb").first();
    for (let i = 0; i < 15; i++) {
      await scrollable.evaluate((el) => (el.scrollTop = el.scrollHeight));
      await page.waitForTimeout(800);
    }
  } catch {}

  // Extract place data from the rendered page
  const items = await page.evaluate(() => {
    const results = [];
    document.querySelectorAll(".fontHeadlineSmall").forEach((el) => {
      const name = el.textContent?.trim();
      if (!name) return;

      const parent =
        el.closest("[data-item-id]") || el.parentElement?.parentElement;
      const fullText = parent?.textContent?.trim() || "";
      const after = fullText.replace(name, "").trim();

      // Parse rating (e.g. "4.7") and category (e.g. "Tapas restaurant")
      const ratingMatch = after.match(/^(\d\.\d)/);
      const rating = ratingMatch ? ratingMatch[1] : null;
      const category = rating
        ? after.slice(rating.length).split(/\d/)[0].trim()
        : after.split(/\d/)[0].trim();

      results.push({
        name,
        category: category || null,
        rating: rating ? parseFloat(rating) : null,
      });
    });
    return results;
  });

  console.error(`Found ${items.length} places.`);
  await browser.close();
  return items;
}

const places = await scrapeMapsList(url);
// Output clean JSON to stdout (logs go to stderr)
console.log(JSON.stringify(places, null, 2));
