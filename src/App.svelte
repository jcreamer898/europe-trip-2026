<script>
  import Hero from "./lib/components/Hero.svelte";
  import Nav from "./lib/components/Nav.svelte";
  import BookingGrid from "./lib/components/BookingGrid.svelte";
  import WarningBanner from "./lib/components/WarningBanner.svelte";
  import DayCard from "./lib/components/DayCard.svelte";
  import CalloutBox from "./lib/components/CalloutBox.svelte";
  import SectionImage from "./lib/components/SectionImage.svelte";
  import RestaurantGrid from "./lib/components/RestaurantGrid.svelte";
  import BudgetTable from "./lib/components/BudgetTable.svelte";
  import LanguageGuide from "./lib/components/LanguageGuide.svelte";
  import Footer from "./lib/components/Footer.svelte";
  import OfflineBanner from "./lib/components/OfflineBanner.svelte";

  import { hero } from "./lib/data/hero.js";
  import { navItems } from "./lib/data/nav.js";
  import { bookings, trainWarning } from "./lib/data/bookings.js";
  import { sections } from "./lib/data/itinerary.js";
  import { parisRestaurants, barcelonaRestaurants } from "./lib/data/restaurants.js";
  import { parisBars, barcelonaBars } from "./lib/data/bars.js";
  import { budgetItems, budgetTotals, budgetNote } from "./lib/data/budget.js";
  import { languageGuides } from "./lib/data/language-guide.js";
</script>

<OfflineBanner />

<Hero
  title={hero.title}
  subtitle={hero.subtitle}
  description={hero.description}
  badges={hero.badges}
/>

<Nav items={navItems} />

<main class="wrap">
  <!-- Confirmed Bookings -->
  <h2 class="sec-title" id="bookings">📋 Confirmed Bookings</h2>
  <p class="sec-sub">Everything locked in — confirmation numbers and key details</p>
  <BookingGrid {bookings} />
  <div class="spacer"></div>
  <WarningBanner icon={trainWarning.icon} title={trainWarning.title} text={trainWarning.text} />

  <!-- Itinerary Sections -->
  {#each sections as section}
    <h2 class="sec-title" id={section.id}>{section.title}</h2>
    <p class="sec-sub">{section.subtitle}</p>

    {#if section.image}
      <SectionImage src={section.image.src} alt={section.image.alt} caption={section.image.caption} />
    {/if}

    {#if section.introCallout}
      <div class="spacer"></div>
      <CalloutBox
        variant={section.introCallout.variant}
        title={section.introCallout.title}
        text={section.introCallout.text}
      />
    {/if}

    {#if section.trainSectionWarning}
      <div class="spacer"></div>
      <WarningBanner
        icon={section.trainSectionWarning.icon}
        title={section.trainSectionWarning.title}
        text={section.trainSectionWarning.text}
      />
    {/if}

    {#each section.days as day}
      <div class="spacer"></div>
      <DayCard {day} />
    {/each}
  {/each}

  <!-- Food Guide -->
  <h2 class="sec-title" id="food">🍽️ Food Guide</h2>
  <p class="sec-sub">Where to eat — Paris and Barcelona recommendations</p>

  <h3 class="food-heading">🥐 Paris</h3>
  <RestaurantGrid restaurants={parisRestaurants} />

  <h3 class="food-heading">🥘 Barcelona</h3>
  <RestaurantGrid restaurants={barcelonaRestaurants} />

  <!-- Bars -->
  <h2 class="sec-title" id="bars">🍸 Bar Guide</h2>
  <p class="sec-sub">Top bars in Paris and Barcelona — cocktails, classics, and hidden gems</p>

  <h3 class="food-heading">🥂 Paris</h3>
  <RestaurantGrid restaurants={parisBars} />

  <h3 class="food-heading">🍹 Barcelona</h3>
  <RestaurantGrid restaurants={barcelonaBars} />

  <!-- Budget -->
  <h2 class="sec-title" id="budget">💰 Budget Overview</h2>
  <p class="sec-sub">Confirmed costs from your bookings + estimated remaining spend</p>
  <BudgetTable items={budgetItems} totals={budgetTotals} note={budgetNote} />

  <!-- Language Guide -->
  <h2 class="sec-title" id="language">🗣️ French + Spanish Cheat Sheet</h2>
  <p class="sec-sub">Quick phrases for restaurants, bakeries, cafés, restrooms, and getting around</p>
  <LanguageGuide guides={languageGuides} />
</main>

<Footer />

<style>
  .wrap {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .sec-title {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 1.75em;
    color: var(--navy);
    margin: 52px 0 6px;
    scroll-margin-top: 56px;
  }

  .sec-sub {
    color: var(--muted);
    font-size: 0.9em;
    margin-bottom: 20px;
  }

  .spacer {
    height: 18px;
  }

  .food-heading {
    font-size: 1.1em;
    color: var(--navy);
    margin: 20px 0 12px;
  }

  @media (max-width: 600px) {
    .wrap {
      padding: 0 14px;
    }
  }
</style>
