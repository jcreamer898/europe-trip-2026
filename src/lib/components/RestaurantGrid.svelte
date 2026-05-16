<script>
  let { restaurants = [] } = $props();
</script>

<div class="grid">
  {#each restaurants as restaurant}
    <article class="card">
      <h3>{restaurant.name}</h3>
      <div class="type">{restaurant.type}</div>
      {#if restaurant.tip}
        <p class="tip">{@html restaurant.tip}</p>
      {/if}
    </article>
  {/each}
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 12px;
  }

  .card {
    padding: 16px;
    border: 1px solid var(--border);
    border-radius: 16px;
    background: var(--card);
    box-shadow: var(--shadow);
  }

  h3 {
    color: var(--navy);
    font-size: 1.05rem;
    line-height: 1.3;
  }

  .type {
    margin-top: 4px;
    color: var(--muted);
    font-size: 0.82rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  .tip {
    margin-top: 10px;
    color: var(--text);
    font-size: 0.92rem;
    line-height: 1.65;
  }
</style>
