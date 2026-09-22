<script>
	import { Footer, Header, Module } from './_layout/index.js';
	import './_layout/main.css';
	import './_layout/page.css';

	let { children } = $props();
</script>

<main id="page_top">
	<Header />
	{@render children()}
	<Footer />
	<Module />
</main>

<style>
	main {
		position: relative;

		background-color: var(--bg1);
		color: var(--ft2);
		transition:
			background-color 0.2s ease-in-out,
			color 0.2s ease-in-out;
	}
</style>
