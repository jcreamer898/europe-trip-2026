<script>
  import BookingGrid from "../components/BookingGrid.svelte";
  import WarningBanner from "../components/WarningBanner.svelte";
  import BudgetTable from "../components/BudgetTable.svelte";
  import PackingList from "../components/PackingList.svelte";
  import { bookings, trainWarning } from "../data/bookings.js";
  import { budgetItems, budgetTotals, budgetNote } from "../data/budget.js";
  import { packingCategories } from "../data/packing.js";
</script>

<main class="wrap">
  <h2 class="sec-title" id="bookings">📋 Confirmed Bookings</h2>
  <p class="sec-sub">Everything locked in — confirmation numbers and key details</p>
  <BookingGrid {bookings} />
  <div class="spacer"></div>
  <WarningBanner icon={trainWarning.icon} title={trainWarning.title} text={trainWarning.text} />

  <h2 class="sec-title" id="budget">💰 Budget Overview</h2>
  <p class="sec-sub">Confirmed costs from your bookings + estimated remaining spend</p>
  <BudgetTable items={budgetItems} totals={budgetTotals} note={budgetNote} />

  <h2 class="sec-title" id="packing">🧳 Packing List</h2>
  <p class="sec-sub">Check items off as you pack — progress is saved in your browser</p>
  <PackingList categories={packingCategories} />
</main>

<style>
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

  @media (max-width: 600px) {
    .wrap {
      padding: 0 14px 48px;
    }
  }
</style>
