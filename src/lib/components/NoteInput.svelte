<script>

  function onKeyDown(e) {

    /*
    [ ] other shortcuts
    [            -> add another one
  

    */


    // tab counting on enter, like IDE's
    if (e.key === "Tab") {
      
      e.preventDefault();
      const textarea = e.target;
      const selectionStart = textarea.selectionStart;
      const selectionEnd = textarea.selectionEnd;
      const value = textarea.value;
      const newValue = value.substring(0, selectionStart) + '\t' + value.substring(selectionEnd);
      textarea.value = newValue;
      textarea.selectionStart = textarea.selectionEnd = selectionStart + 1;
    }
    // console.log("Hello");
  }

</script>


<section>
  <!-- <input type="text" class="TodoInput" name="myInput" on:input={handleTodoInput} > -->
  <textarea name="" class="TodoInput" cols="30" rows="10" on:keydown={onKeyDown}></textarea>
  <!-- <button on:click={saveTodo} >save</button> -->
</section>

<style>
  	.TodoInput {
		height: 100vh;
		width: 50vh;
	}
</style>