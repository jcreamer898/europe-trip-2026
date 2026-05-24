<script>
  import RestaurantGrid from "../components/RestaurantGrid.svelte";
  import { parisRestaurants, barcelonaRestaurants } from "../data/restaurants.js";
  import { parisBars, barcelonaBars } from "../data/bars.js";

  const cityNav = [
    { id: "paris-food", label: "🥐 Paris Restaurants" },
    { id: "bcn-food", label: "🥘 BCN Restaurants" },
    { id: "paris-bars", label: "🥂 Paris Bars" },
    { id: "bcn-bars", label: "🍹 BCN Bars" }
  ];

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
</script>

<!-- Section jump nav -->
<div class="section-nav-wrap" aria-label="Food & bar sections">
  <div class="section-nav">
    {#each cityNav as item}
      <button onclick={() => scrollToSection(item.id)} type="button">
        {item.label}
      </button>
    {/each}
  </div>
</div>

<main class="wrap">
  <!-- Restaurants -->
  <h2 class="sec-title" id="paris-food">🍽️ Paris — Restaurants</h2>
  <p class="sec-sub">Where to eat in Paris — from crêpes to steak frites to legendary bakeries</p>
  <RestaurantGrid restaurants={parisRestaurants} />

  <h2 class="sec-title" id="bcn-food">🍽️ Barcelona — Restaurants</h2>
  <p class="sec-sub">Tapas, pintxos, and everything in between — the best spots near your Airbnb</p>
  <RestaurantGrid restaurants={barcelonaRestaurants} />

  <!-- Bars -->
  <h2 class="sec-title" id="paris-bars">🍸 Paris — Bars</h2>
  <p class="sec-sub">Cocktail bars, speakeasies, and classic Parisian haunts</p>
  <RestaurantGrid restaurants={parisBars} />

  <h2 class="sec-title" id="bcn-bars">🍹 Barcelona — Bars</h2>
  <p class="sec-sub">From the world's best bar to 200-year-old absinthe dens</p>
  <RestaurantGrid restaurants={barcelonaBars} />
</main>

<style>
  .section-nav-wrap {
    position: sticky;
    top: 53px;
    z-index: 90;
    background: rgba(248, 250, 252, 0.92);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--border);
  }

  .section-nav {
    display: flex;
    gap: 4px;
    max-width: 900px;
    margin: 0 auto;
    padding: 0 16px;
    overflow-x: auto;
    scrollbar-width: none;
  }

  .section-nav::-webkit-scrollbar {
    display: none;
  }

  button {
    flex: 0 0 auto;
    padding: 10px 12px 8px;
    border: none;
    border-bottom: 2px solid transparent;
    background: transparent;
    color: var(--muted);
    font-size: 0.82rem;
    font-weight: 700;
    cursor: pointer;
    white-space: nowrap;
    transition: color 0.15s ease, border-color 0.15s ease;
  }

  button:hover {
    color: var(--blue);
    border-bottom-color: var(--blue);
  }

  .wrap {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 20px 60px;
  }

  .sec-title {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 1.75em;
    color: var(--navy);
    margin: 52px 0 6px;
    scroll-margin-top: 110px;
  }

  .sec-sub {
    color: var(--muted);
    font-size: 0.9em;
    margin-bottom: 20px;
  }

  @media (max-width: 600px) {
    .wrap {
      padding: 0 14px 48px;
    }

    button {
      padding: 10px 8px 8px;
      font-size: 0.78rem;
    }
  }
</style>
