<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';

	let TodoText = "yellow"


	const saveTodo = (e) => {
		// save todo text
		TodoText = "d lsfkjsdlkfj dslksf"
	}

	function onKeyDown(e) {
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

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		Github esque progress bar
	</h1>
	<div class="github-tracking">
		TODO
	</div>

	<h1>
		Notes app
	</h1>
	<p>{TodoText}</p>
	<!-- <input type="text" class="TodoInput" name="myInput" on:input={handleTodoInput} > -->
	<textarea name="" class="TodoInput" cols="30" rows="10" on:keydown={onKeyDown}></textarea>
	<button on:click={saveTodo} >save</button>



	

	<Counter />
</section>

<style>
	.TodoInput {
		height: 100vh;
		width: 50vh;
	}

	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

</style>
