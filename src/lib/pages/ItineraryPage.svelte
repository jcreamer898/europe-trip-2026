<script>
  import DayCard from "../components/DayCard.svelte";
  import CalloutBox from "../components/CalloutBox.svelte";
  import SectionImage from "../components/SectionImage.svelte";
  import WarningBanner from "../components/WarningBanner.svelte";
  import { sections } from "../data/itinerary.js";

  const sectionNav = sections.map((s) => ({ id: s.id, label: s.title }));

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  let activeSectionId = $state(sections[0]?.id ?? "");

  $effect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSectionId = entry.target.id;
          }
        });
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });
</script>

<!-- Section jump nav -->
<div class="section-nav-wrap" aria-label="Itinerary sections">
  <div class="section-nav">
    {#each sectionNav as item}
      <button
        class:active={activeSectionId === item.id}
        onclick={() => scrollToSection(item.id)}
        type="button"
      >
        {item.label}
      </button>
    {/each}
  </div>
</div>

<main class="wrap">
  {#each sections as section}
    <h2 class="sec-title" id={section.id}>{section.title}</h2>
    <p class="sec-sub">{section.subtitle}</p>

    {#if section.image}
      <SectionImage src={section.image.src} alt={section.image.alt} caption={section.image.caption} />
    {/if}

    {#if section.introCallout}
      <div class="spacer"></div>
      <CalloutBox
        variant={section.introCallout.variant}
        title={section.introCallout.title}
        text={section.introCallout.text}
      />
    {/if}

    {#if section.trainSectionWarning}
      <div class="spacer"></div>
      <WarningBanner
        icon={section.trainSectionWarning.icon}
        title={section.trainSectionWarning.title}
        text={section.trainSectionWarning.text}
      />
    {/if}

    {#each section.days as day}
      <div class="spacer"></div>
      <DayCard {day} />
    {/each}
  {/each}
</main>

<style>
  .section-nav-wrap {
    position: sticky;
    top: 53px; /* sits just below the main nav */
    z-index: 90;
    background: rgba(248, 250, 252, 0.92);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--border);
  }

  .section-nav {
    display: flex;
    gap: 4px;
    max-width: 900px;
    margin: 0 auto;
    padding: 0 16px;
    overflow-x: auto;
    scrollbar-width: none;
  }

  .section-nav::-webkit-scrollbar {
    display: none;
  }

  button {
    flex: 0 0 auto;
    padding: 10px 12px 8px;
    border: none;
    border-bottom: 2px solid transparent;
    background: transparent;
    color: var(--muted);
    font-size: 0.82rem;
    font-weight: 700;
    cursor: pointer;
    white-space: nowrap;
    transition: color 0.15s ease, border-color 0.15s ease;
  }

  button:hover,
  button.active {
    color: var(--blue);
    border-bottom-color: var(--blue);
  }

  .wrap {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 20px 60px;
  }

  .sec-title {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 1.75em;
    color: var(--navy);
    margin: 52px 0 6px;
    scroll-margin-top: 110px;
  }

  .sec-sub {
    color: var(--muted);
    font-size: 0.9em;
    margin-bottom: 20px;
  }

  .spacer {
    height: 18px;
  }

  @media (max-width: 600px) {
    .wrap {
      padding: 0 14px 48px;
    }

    button {
      padding: 10px 8px 8px;
      font-size: 0.78rem;
    }
  }
</style>
