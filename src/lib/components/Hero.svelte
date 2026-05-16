<script>
  let { title = "", subtitle = "", description = "", badges = [] } = $props();
</script>

<header class="hero">
  <div class="overlay"></div>
  <div class="inner">
    <h1>{@html title}<br />{subtitle}</h1>
    <p>{description}</p>
    {#if badges.length}
      <div class="badges">
        {#each badges as badge}
          <span class="badge">{badge}</span>
        {/each}
      </div>
    {/if}
  </div>
</header>

<style>
  .hero {
    position: relative;
    overflow: hidden;
    padding: 80px 24px 64px;
    text-align: center;
    color: white;
    background: linear-gradient(135deg, #0f172a 0%, #1b2a4a 45%, #1d4ed8 100%);
    isolation: isolate;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at top, rgba(255, 255, 255, 0.22), transparent 52%);
    pointer-events: none;
    z-index: -1;
  }

  .inner {
    position: relative;
    max-width: 920px;
    margin: 0 auto;
  }

  h1 {
    font-size: clamp(2.4rem, 7vw, 4.5rem);
    line-height: 1.05;
    letter-spacing: -0.03em;
    margin-bottom: 16px;
  }

  p {
    max-width: 760px;
    margin: 0 auto;
    font-size: clamp(1rem, 2.2vw, 1.15rem);
    color: rgba(255, 255, 255, 0.88);
  }

  .badges {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-top: 24px;
  }

  .badge {
    padding: 7px 14px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.16);
    background: rgba(255, 255, 255, 0.14);
    color: white;
    font-size: 0.88rem;
    font-weight: 600;
    backdrop-filter: blur(10px);
  }

  @media (max-width: 600px) {
    .hero {
      padding: 52px 16px 40px;
    }

    h1 {
      font-size: 2.45rem;
    }

    .badges {
      gap: 8px;
    }
  }
</style>
