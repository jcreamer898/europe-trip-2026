<script>
  import Hero from "./lib/components/Hero.svelte";
  import Nav from "./lib/components/Nav.svelte";
  import Footer from "./lib/components/Footer.svelte";
  import OfflineBanner from "./lib/components/OfflineBanner.svelte";

  import HomePage from "./lib/pages/HomePage.svelte";
  import ItineraryPage from "./lib/pages/ItineraryPage.svelte";
  import FoodPage from "./lib/pages/FoodPage.svelte";
  import LanguagePage from "./lib/pages/LanguagePage.svelte";

  import { hero } from "./lib/data/hero.js";
  import { navItems } from "./lib/data/nav.js";

  const VALID_ROUTES = ["home", "itinerary", "food", "language"];

  function getRouteFromHash() {
    if (typeof window === "undefined") return "home";
    const hash = window.location.hash;
    if (!hash || !hash.startsWith("#/")) return "home";
    const route = hash.replace(/^#\//, "") || "home";
    return VALID_ROUTES.includes(route) ? route : "home";
  }

  let currentRoute = $state(getRouteFromHash());

  $effect(() => {
    const handler = () => {
      const next = getRouteFromHash();
      if (next !== currentRoute) {
        currentRoute = next;
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    };
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  });
</script>

<OfflineBanner />

<Hero
  title={hero.title}
  subtitle={hero.subtitle}
  description={hero.description}
  badges={hero.badges}
/>

<Nav items={navItems} activePage={currentRoute} />

{#if currentRoute === "itinerary"}
  <ItineraryPage />
{:else if currentRoute === "food"}
  <FoodPage />
{:else if currentRoute === "language"}
  <LanguagePage />
{:else}
  <HomePage />
{/if}

<Footer />


