<script>
  let { categories = [] } = $props();

  const STORAGE_KEY = "europe-trip-packing-2026";

  function loadChecked() {
    if (typeof localStorage === "undefined") return {};
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}");
    } catch {
      return {};
    }
  }

  let checked = $state(loadChecked());

  function toggle(id) {
    checked[id] = !(checked[id] ?? false);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
    } catch {
      // storage unavailable — ignore
    }
  }

  function resetAll() {
    checked = {};
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }

  function totalItems(cats) {
    return cats.reduce((sum, c) => sum + c.items.length, 0);
  }

  function packedCount(cats) {
    return cats.reduce(
      (sum, c) => sum + c.items.filter((i) => checked[i.id]).length,
      0
    );
  }

  let total = $derived(totalItems(categories));
  let packed = $derived(packedCount(categories));
  let pct = $derived(total > 0 ? Math.round((packed / total) * 100) : 0);
  let allDone = $derived(packed === total && total > 0);
</script>

<div class="packing-wrap">
  <div
    class="progress-bar-wrap"
    role="progressbar"
    aria-valuenow={packed}
    aria-valuemin={0}
    aria-valuemax={total}
    aria-label={`${packed} of ${total} items packed`}
  >
    <div class="progress-bar" style="width: {pct}%"></div>
  </div>
  <p class="progress-label">
    {#if allDone}
      ✅ All packed — have an amazing trip!
    {:else}
      {packed} / {total} items packed ({pct}%)
    {/if}
  </p>

  <div class="categories">
    {#each categories as cat (cat.id)}
      {@const catPacked = cat.items.filter((i) => checked[i.id]).length}
      <div class="cat-block">
        <h3 class="cat-title">
          {cat.label}
          <span class="cat-count">{catPacked}/{cat.items.length}</span>
        </h3>
        <ul class="item-list">
          {#each cat.items as item (item.id)}
            <li>
              <label class:done={checked[item.id]}>
                <input
                  type="checkbox"
                  checked={checked[item.id] ?? false}
                  onchange={() => toggle(item.id)}
                  aria-label={item.label}
                />
                {item.label}
              </label>
            </li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>

  {#if packed > 0}
    <button class="reset-btn" onclick={resetAll}>↺ Reset all</button>
  {/if}
</div>

<style>
  .packing-wrap {
    background: var(--card);
    border-radius: 18px;
    box-shadow: var(--shadow);
    padding: 24px 28px 28px;
  }

  .progress-bar-wrap {
    height: 8px;
    background: var(--border);
    border-radius: 99px;
    overflow: hidden;
    margin-bottom: 10px;
  }

  .progress-bar {
    height: 100%;
    background: var(--green);
    border-radius: 99px;
    transition: width 0.3s ease;
  }

  .progress-label {
    font-size: 0.88rem;
    color: var(--muted);
    margin-bottom: 24px;
    font-weight: 600;
  }

  .categories {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 24px;
  }

  .cat-block {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .cat-title {
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--navy);
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 4px;
  }

  .cat-count {
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--muted);
    margin-left: auto;
    background: var(--bg);
    border-radius: 99px;
    padding: 1px 8px;
  }

  .item-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  label {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    font-size: 0.92rem;
    color: var(--text);
    transition: color 0.15s ease;
    line-height: 1.4;
  }

  label.done {
    color: var(--muted);
    text-decoration: line-through;
  }

  input[type="checkbox"] {
    width: 17px;
    height: 17px;
    flex-shrink: 0;
    accent-color: var(--green);
    cursor: pointer;
  }

  .reset-btn {
    margin-top: 24px;
    background: none;
    border: 1px solid var(--border);
    border-radius: 8px;
    color: var(--muted);
    font-size: 0.82rem;
    font-weight: 700;
    padding: 6px 14px;
    cursor: pointer;
    transition: color 0.15s ease, border-color 0.15s ease;
  }

  .reset-btn:hover {
    color: var(--text);
    border-color: var(--text);
  }

  @media (max-width: 600px) {
    .packing-wrap {
      padding: 18px 16px 22px;
    }

    .categories {
      grid-template-columns: 1fr;
    }
  }
</style>
