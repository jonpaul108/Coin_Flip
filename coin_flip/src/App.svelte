<script>
	import { Router } from 'svelte-router-spa';
  import { routes } from './routes/routes';
	import Header from './utils/Header.svelte';
	import Footer from './utils/Footer.svelte';
</script>

<style>
	main {
		height: 80vh;
		margin-top: 4em;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}


</style>

<Header />
<main>
	<Router { routes } />
</main>
<Footer />

