<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import HeatMap from '$lib/components/HeatMap.svelte'
	import NoteInput from '$lib/components/NoteInput.svelte'
	let TodoText = "yellow"


	const saveTodo = (e) => {
		// save todo text
		TodoText = "d lsfkjsdlkfj dslksf"
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
	<HeatMap />


	<h1>
		Clickable Habits here
	</h1>
	<p>{TodoText}</p>

	<NoteInput/>
	<Counter />
</section>

<style>


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
