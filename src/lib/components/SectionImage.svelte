<script>
  let { src = "", alt = "", caption = "" } = $props();
</script>

<figure class="image-card">
  <img src={src} alt={alt} loading="lazy" />
  {#if caption}
    <figcaption>{caption}</figcaption>
  {/if}
</figure>

<style>
  .image-card {
    position: relative;
    overflow: hidden;
    height: 340px;
    border-radius: 14px;
    box-shadow: var(--shadow);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.28s ease;
  }

  .image-card:hover img {
    transform: scale(1.04);
  }

  figcaption {
    position: absolute;
    inset: auto 0 0;
    padding: 42px 18px 16px;
    color: white;
    font-size: 0.95rem;
    font-weight: 600;
    background: linear-gradient(180deg, transparent 0%, rgba(15, 23, 42, 0.82) 100%);
  }

  @media (max-width: 600px) {
    .image-card {
      height: 210px;
    }
  }
</style>
