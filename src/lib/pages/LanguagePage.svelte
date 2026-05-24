<script>
  import { frenchPhrases, spanishPhrases } from "../data/language.js";
</script>

<main class="wrap">
  <div class="intro">
    <p class="intro-text">
      A quick reference for common phrases in both cities. Locals appreciate even a small effort —
      a <em>bonjour</em> in Paris or a <em>gracias</em> in Barcelona goes a long way.
    </p>
  </div>

  <div class="languages-grid">
    <!-- French -->
    <section class="lang-section">
      <div class="lang-header lang-fr">
        <span class="flag">🇫🇷</span>
        <div>
          <h2>French</h2>
          <p>Paris · June 2–7</p>
        </div>
      </div>

      {#each frenchPhrases as group}
        <div class="phrase-group">
          <h3 class="group-title">
            <span class="group-emoji">{group.emoji}</span>
            {group.category}
          </h3>
          <div class="phrases">
            {#each group.phrases as row}
              <div class="phrase-row">
                <div class="phrase-text">{row.phrase}</div>
                {#if row.pronunciation}
                  <div class="pronunciation">{row.pronunciation}</div>
                {/if}
                <div class="english">{row.english}</div>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </section>

    <!-- Spanish -->
    <section class="lang-section">
      <div class="lang-header lang-es">
        <span class="flag">🇪🇸</span>
        <div>
          <h2>Spanish</h2>
          <p>Barcelona · June 7–12</p>
        </div>
      </div>

      {#each spanishPhrases as group}
        <div class="phrase-group">
          <h3 class="group-title">
            <span class="group-emoji">{group.emoji}</span>
            {group.category}
          </h3>
          <div class="phrases">
            {#each group.phrases as row}
              <div class="phrase-row">
                <div class="phrase-text">{row.phrase}</div>
                {#if row.pronunciation}
                  <div class="pronunciation">{row.pronunciation}</div>
                {/if}
                <div class="english">{row.english}</div>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </section>
  </div>
</main>

<style>
  .wrap {
    max-width: 1100px;
    margin: 0 auto;
    padding: 40px 20px 60px;
  }

  .intro {
    max-width: 680px;
    margin: 0 auto 40px;
    text-align: center;
  }

  .intro-text {
    color: var(--muted);
    font-size: 0.95rem;
    line-height: 1.75;
  }

  .languages-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    align-items: start;
  }

  .lang-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .lang-header {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 20px 22px;
    border-radius: 16px;
    color: white;
  }

  .lang-fr {
    background: linear-gradient(135deg, #1d4ed8, #3b82f6);
  }

  .lang-es {
    background: linear-gradient(135deg, #b91c1c, #ef4444);
  }

  .flag {
    font-size: 2.4rem;
    line-height: 1;
  }

  .lang-header h2 {
    font-size: 1.4rem;
    font-weight: 800;
    margin-bottom: 2px;
  }

  .lang-header p {
    font-size: 0.82rem;
    opacity: 0.85;
    font-weight: 500;
  }

  .phrase-group {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 14px;
    overflow: hidden;
    box-shadow: var(--shadow);
  }

  .group-title {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    background: var(--bg);
    border-bottom: 1px solid var(--border);
    font-size: 0.88rem;
    font-weight: 800;
    color: var(--navy);
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  .group-emoji {
    font-size: 1rem;
  }

  .phrases {
    padding: 4px 0;
  }

  .phrase-row {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto;
    gap: 1px 12px;
    padding: 10px 16px;
    border-bottom: 1px solid var(--border);
  }

  .phrase-row:last-child {
    border-bottom: none;
  }

  .phrase-text {
    font-weight: 700;
    color: var(--navy);
    font-size: 0.95rem;
    grid-row: 1;
    grid-column: 1;
  }

  .pronunciation {
    font-size: 0.74rem;
    color: var(--muted);
    font-style: italic;
    grid-row: 2;
    grid-column: 1;
    margin-top: 1px;
  }

  .english {
    font-size: 0.85rem;
    color: var(--text);
    grid-row: 1 / span 2;
    grid-column: 2;
    text-align: right;
    align-self: center;
    white-space: nowrap;
  }

  @media (max-width: 820px) {
    .languages-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 600px) {
    .wrap {
      padding: 24px 14px 48px;
    }

    .phrase-row {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto auto;
    }

    .english {
      grid-row: 3;
      grid-column: 1;
      text-align: left;
      color: var(--muted);
      font-size: 0.82rem;
      margin-top: 2px;
    }

    .pronunciation {
      grid-row: 2;
    }
  }
</style>
