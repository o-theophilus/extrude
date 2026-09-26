<script>
	import { Footer, Header, Module } from './_layout/index.js';
	import './_layout/main.css';
	import './_layout/page.css';

	let { children } = $props();
</script>

<main>
	<Header />
	<div class="page_css">
		{@render children()}
		<Footer />
	</div>
	<Module />
</main>

<style>
	main {
		position: relative;
	}
</style>
