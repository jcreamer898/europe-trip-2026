<script>
  let { items = [], totals = {}, note = "" } = $props();
</script>

<div class="table-wrap">
  <table>
    <thead>
      <tr>
        <th>Category</th>
        <th>Confirmed</th>
        <th>Estimated</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      {#each items as item}
        <tr>
          <td>
            {#if item.link}
              <a href={item.link} target="_blank" rel="noreferrer">{item.category}</a>
            {:else}
              {item.category}
            {/if}
          </td>
          <td>{item.confirmed}</td>
          <td>{item.estimated}</td>
          <td class="amount">{item.total}</td>
        </tr>
      {/each}
    </tbody>
    <tfoot>
      <tr class="total-row">
        <th scope="row">Confirmed Total</th>
        <td>{totals.confirmed}</td>
        <td>—</td>
        <td class="amount">{totals.confirmed}</td>
      </tr>
      <tr class="total-row">
        <th scope="row">Estimated Remaining</th>
        <td>—</td>
        <td>{totals.estimated}</td>
        <td class="amount">{totals.estimated}</td>
      </tr>
      <tr class="grand-row">
        <th scope="row">Grand Total</th>
        <td colspan="2"></td>
        <td class="amount">{totals.grand}</td>
      </tr>
    </tfoot>
  </table>

  {#if note}
    <p class="note">{note}</p>
  {/if}
</div>

<style>
  .table-wrap {
    overflow-x: auto;
    border-radius: 18px;
    box-shadow: var(--shadow);
  }

  table {
    width: 100%;
    border-collapse: collapse;
    background: var(--card);
  }

  thead tr {
    background: var(--navy);
    color: white;
  }

  th,
  td {
    padding: 14px 16px;
    border-bottom: 1px solid var(--border);
    text-align: left;
  }

  tbody tr:nth-child(even) {
    background: rgba(37, 99, 235, 0.03);
  }

  a {
    color: var(--blue);
    font-weight: 700;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .amount {
    font-weight: 800;
    color: var(--navy);
  }

  .total-row {
    background: #eef4ff;
    font-weight: 700;
  }

  .grand-row {
    background: var(--navy);
    color: white;
  }

  .grand-row .amount {
    color: white;
  }

  .note {
    padding: 12px 16px 0;
    color: var(--muted);
    font-size: 0.9rem;
    background: var(--card);
  }

  @media (max-width: 600px) {
    th,
    td {
      padding: 12px;
      font-size: 0.92rem;
    }
  }
</style>
