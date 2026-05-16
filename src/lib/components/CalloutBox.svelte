<script>
  let { variant = "info", title = "", text = "" } = $props();
</script>

<div class={`box box-${variant}`}>
  {#if title}
    <div class="bt">{title}</div>
  {/if}
  <div class="copy">{@html text}</div>
</div>

<style>
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

  .copy {
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
</style>
