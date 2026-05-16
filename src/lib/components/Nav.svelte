<script>
  let { items = [] } = $props();
  let activeHref = $state("");

  $effect(() => {
    if (typeof document === "undefined" || typeof IntersectionObserver === "undefined") {
      return;
    }

    const sections = items
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeHref = `#${entry.target.id}`;
          }
        });
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  });

  function handleClick(event, href) {
    event.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    activeHref = href;
  }
</script>

<nav class="nav-wrap" aria-label="Trip sections">
  <div class="nav-list">
    {#each items as item}
      <a
        href={item.href}
        class:active={activeHref === item.href}
        aria-current={activeHref === item.href ? "page" : undefined}
        onclick={(event) => handleClick(event, item.href)}
      >
        {item.label}
      </a>
    {/each}
  </div>
</nav>

<style>
  .nav-wrap {
    position: sticky;
    top: 0;
    z-index: 99;
    border-bottom: 1px solid var(--border);
    background: rgba(255, 255, 255, 0.84);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
  }

  .nav-list {
    display: flex;
    gap: 6px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
    overflow-x: auto;
    scrollbar-width: thin;
  }

  .nav-list::-webkit-scrollbar {
    height: 6px;
  }

  a {
    flex: 0 0 auto;
    padding: 16px 10px 13px;
    border-bottom: 3px solid transparent;
    color: var(--muted);
    font-size: 0.95rem;
    font-weight: 700;
    text-decoration: none;
    white-space: nowrap;
    transition: color 0.18s ease, border-color 0.18s ease;
  }

  a:hover,
  a.active {
    color: var(--blue);
    border-bottom-color: var(--blue);
  }

  @media (max-width: 600px) {
    .nav-list {
      padding: 0 10px;
    }

    a {
      padding: 14px 8px 11px;
      font-size: 0.9rem;
    }
  }
</style>
