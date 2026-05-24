<script>
  let { guides = [] } = $props();
</script>

<div class="guide-grid">
  {#each guides as guide}
    <section class="guide-card" aria-labelledby={guide.id}>
      <h3 class="guide-heading" id={guide.id}>{guide.title}</h3>
      <ul class="phrase-list">
        {#each guide.phrases as phrase}
          <li class="phrase-item">
            <div class="phrase-row">
              <span class="phrase-local">{phrase.local}</span>
              <span class="phrase-context">{phrase.context}</span>
            </div>
            <p class="phrase-english">{phrase.english}</p>
          </li>
        {/each}
      </ul>
    </section>
  {/each}
</div>

<style>
  .guide-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 12px;
  }

  .guide-card {
    padding: 18px;
    border: 1px solid var(--border);
    border-radius: 18px;
    background: var(--card);
    box-shadow: var(--shadow);
  }

  .guide-heading {
    color: var(--navy);
    margin-bottom: 12px;
    font-size: 1.1rem;
  }

  .phrase-list {
    list-style: none;
    display: grid;
    gap: 12px;
  }

  .phrase-item + .phrase-item {
    padding-top: 12px;
    border-top: 1px solid var(--border);
  }

  .phrase-row {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    align-items: baseline;
    margin-bottom: 2px;
  }

  .phrase-local {
    font-weight: 600;
    color: var(--navy);
  }

  .phrase-context {
    color: var(--muted);
    font-size: 0.82rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    white-space: nowrap;
  }

  .phrase-english {
    color: var(--text);
    line-height: 1.5;
  }

  @media (max-width: 600px) {
    .phrase-row {
      flex-direction: column;
      gap: 2px;
    }

    .phrase-context {
      white-space: normal;
    }
  }
</style>
