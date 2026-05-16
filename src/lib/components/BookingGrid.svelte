<script>
  let { bookings = [] } = $props();
</script>

<div class="grid">
  {#each bookings as booking}
    <article class="card">
      <div class="topline">
        <span class="icon" aria-hidden="true">{booking.icon}</span>
        <span class="label">{booking.label}</span>
        {#if booking.confirmed}
          <span class="confirmed">Confirmed</span>
        {/if}
      </div>

      {#if booking.link}
        <a class="value link" href={booking.link} target="_blank" rel="noreferrer">{booking.value}</a>
      {:else}
        <div class="value">{booking.value}</div>
      {/if}

      {#if booking.details}
        <p class="details">{@html booking.details}</p>
      {/if}
    </article>
  {/each}
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 14px;
  }

  .card {
    padding: 18px;
    border: 1px solid var(--border);
    border-radius: 18px;
    background: var(--card);
    box-shadow: var(--shadow);
  }

  .topline {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }

  .icon {
    font-size: 1.15rem;
  }

  .label {
    color: var(--muted);
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .confirmed {
    margin-left: auto;
    padding: 4px 9px;
    border-radius: 999px;
    background: var(--green-l);
    color: var(--green);
    font-size: 0.78rem;
    font-weight: 700;
  }

  .value {
    color: var(--navy);
    font-size: 1.2rem;
    font-weight: 800;
    line-height: 1.3;
  }

  .link {
    display: inline-block;
    color: var(--blue);
    text-decoration: none;
  }

  .link:hover {
    text-decoration: underline;
  }

  .details {
    margin-top: 8px;
    color: var(--muted);
    font-size: 0.92rem;
    line-height: 1.6;
  }

  :global(.details a) {
    color: var(--blue);
  }

  @media (max-width: 600px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
</style>
