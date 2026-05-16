<script>
  let { icon = "⚠️", title = "", text = "" } = $props();
</script>

<div class="warning-banner" role="alert">
  <div class="icon" aria-hidden="true">{icon}</div>
  <div class="content">
    <div class="title">{title}</div>
    <div class="text">{@html text}</div>
  </div>
</div>

<style>
  .warning-banner {
    display: flex;
    gap: 14px;
    align-items: flex-start;
    padding: 16px 18px;
    border: 2px solid #dc2626;
    border-radius: 12px;
    background: #fef2f2;
    color: #7f1d1d;
  }

  .icon {
    font-size: 1.45rem;
    line-height: 1;
  }

  .content {
    min-width: 0;
  }

  .title {
    font-weight: 800;
    margin-bottom: 4px;
  }

  .text {
    font-size: 0.96rem;
    line-height: 1.6;
  }

  @media (max-width: 600px) {
    .warning-banner {
      padding: 14px;
    }
  }
</style>
