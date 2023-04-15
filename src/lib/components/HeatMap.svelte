
<script>
  /*
  [ ] Handle Dates:
  Handle dates, size is dynamic according to date
  how to setup this datastructure?

  */


  const grid = Array(35).fill(0);

  grid[5] = 1;
  grid[17] = 1;
  grid[28] = 1;

  function getColor(n) {
    if (grid[n] === 0) {
      return "white";
    } else {
      return  "green";
    }
  }
</script>




<section>
  <div class="grid">
    {#each Array(35) as _, i}
      <div class="cell" style="background-color: {getColor(i)}"></div>
    {/each}
  </div>
</section>


<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(7, 1fr);
    gap: 10px;
  }
  
  .cell {
    background-color: green;
    border: 1px solid #000;
    width: 20px;
    height: 20px;
  }
</style>