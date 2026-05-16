<script>
  let { day } = $props();

  const themeClass = (theme) => `theme-${theme ?? "paris"}`;
  const variantClass = (variant) => `box-${variant ?? "info"}`;
</script>

{#snippet renderBlocks(blocks)}
  {#each blocks ?? [] as block}
    {@render renderBlock(block)}
  {/each}
{/snippet}

{#snippet renderBlock(block)}
  {#if block.type === "heading"}
    <h4>{block.text}</h4>
  {:else if block.type === "list"}
    <ul>
      {#each block.items ?? [] as item}
        <li>{@html item}</li>
      {/each}
    </ul>
  {:else if block.type === "callout"}
    <div class={`box ${variantClass(block.variant)}`}>
      {#if block.title}
        <div class="bt">{@html block.title}</div>
      {/if}
      <div class="box-copy">{@html block.text}</div>
    </div>
  {:else if block.type === "paragraph"}
    <p>{@html block.text}</p>
  {:else if block.type === "options"}
    <div class="options">
      {#each block.options ?? [] as option}
        <section class="option">
          <h4>{option.title}</h4>
          {@render renderBlocks(option.blocks)}
        </section>
      {/each}
    </div>
  {/if}
{/snippet}

<article class={`day-card ${themeClass(day?.theme)}`}>
  <header class="card-header">
    <div>
      <div class="tag">{day?.tag}</div>
      <h3>{day?.title}</h3>
    </div>
  </header>

  <div class="card-body">
    {@render renderBlocks(day?.blocks)}
  </div>
</article>

<style>
  .day-card {
    border: 1px solid var(--border);
    border-radius: 22px;
    overflow: hidden;
    background: var(--card);
    box-shadow: var(--shadow);
    transition: transform 0.22s ease, box-shadow 0.22s ease;
  }

  .day-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 18px 22px;
    background: var(--theme-gradient);
    color: white;
  }

  .tag {
    margin-bottom: 6px;
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.8);
  }

  h3 {
    font-size: 1.45rem;
    line-height: 1.2;
  }

  .card-body {
    padding: 22px;
  }

  h4 {
    color: var(--navy);
    font-size: 1rem;
    margin: 1.1rem 0 0.55rem;
  }

  .card-body :global(h4:first-child) {
    margin-top: 0;
  }

  p,
  ul,
  .box,
  .option + .option {
    margin-top: 0.9rem;
  }

  p {
    color: var(--text);
    line-height: 1.75;
  }

  ul {
    padding-left: 1.15rem;
    color: var(--text);
  }

  li + li {
    margin-top: 0.45rem;
  }

  .options {
    display: grid;
    gap: 16px;
  }

  .option {
    padding-top: 4px;
  }

  .box {
    padding: 14px 16px;
    border-left: 4px solid var(--box-accent, var(--blue));
    border-radius: 14px;
    background: var(--box-bg, var(--paris-l));
  }

  .bt {
    color: var(--navy);
    font-weight: 800;
    margin-bottom: 5px;
  }

  .box-copy {
    color: var(--text);
    line-height: 1.65;
  }

  .box-blue {
    --box-accent: var(--paris);
    --box-bg: var(--paris-l);
  }

  .box-green {
    --box-accent: var(--green);
    --box-bg: var(--green-l);
  }

  .box-yellow {
    --box-accent: var(--gaudi);
    --box-bg: var(--gaudi-l);
  }

  .box-purple {
    --box-accent: var(--disney);
    --box-bg: var(--disney-l);
  }

  .box-red {
    --box-accent: var(--bcn);
    --box-bg: var(--bcn-l);
  }

  .theme-paris {
    --theme-gradient: linear-gradient(135deg, #1d4ed8, #3b82f6);
  }

  .theme-bcn {
    --theme-gradient: linear-gradient(135deg, #b91c1c, #ef4444);
  }

  .theme-disney {
    --theme-gradient: linear-gradient(135deg, #6d28d9, #8b5cf6);
  }

  .theme-travel {
    --theme-gradient: linear-gradient(135deg, #374151, #6b7280);
  }

  .theme-gaudi {
    --theme-gradient: linear-gradient(135deg, #b45309, #f59e0b);
  }

  @media (max-width: 600px) {
    .card-header,
    .card-body {
      padding: 16px;
    }
  }
</style>
