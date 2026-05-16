<script>
  let isOnline = $state(true);

  $effect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const syncStatus = () => {
      isOnline = navigator.onLine;
    };

    syncStatus();
    window.addEventListener("online", syncStatus);
    window.addEventListener("offline", syncStatus);

    return () => {
      window.removeEventListener("online", syncStatus);
      window.removeEventListener("offline", syncStatus);
    };
  });
</script>

{#if !isOnline}
  <div class="offline-banner" role="status" aria-live="polite">
    You’re offline. Saved itinerary details are still available.
  </div>
{/if}

<style>
  .offline-banner {
    position: fixed;
    left: 50%;
    bottom: 12px;
    transform: translateX(-50%);
    z-index: 120;
    width: min(92vw, 540px);
    padding: 12px 16px;
    border: 1px solid #f59e0b;
    border-radius: 999px;
    background: #fef3c7;
    color: #9a3412;
    text-align: center;
    font-weight: 700;
    box-shadow: var(--shadow-lg);
  }
</style>
