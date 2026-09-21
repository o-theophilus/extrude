<script>
	import { Button, Hamburger } from '$lib/button';
	import { module } from '$lib/store.svelte.js';
	import QuotePopup from '../_home/quote.popup.svelte';

	let links = [
		{ name: 'What We Print', href: '/#what-we-print' },
		{ name: 'How It Works', href: '/#how-it-works' },
		{ name: 'Materials', href: '/#materials' },
		{ name: 'FAQ', href: '/#faq' }
	];

	let open = $state(false);
</script>

<section>
	<div class="block">
		<a href="/">
			<img src="/logo.png" alt="logo" />
			Extrude
		</a>

		<nav class="links">
			{#each links as x}
				<a href={x.href}>{x.name}</a>
			{/each}
		</nav>

		<div class="right">
			<Button
				--button-background-color="var(--cl3)"
				--button-background-color-hover="var(--cl3_)"
				--button-color="white"
				--button-outline-color="transparent"
				onclick={() => module.open(QuotePopup)}
			>
				Request a Quote
			</Button>

			<div class="hamburger">
				<Hamburger {open} onclick={() => (open = !open)} />
			</div>
		</div>
	</div>

	{#if open}
		<div class="mobile_menu">
			{#each links as x}
				<a href={x.href} onclick={() => (open = false)}>{x.name}</a>
			{/each}
		</div>
	{/if}
</section>

<style>
	section {
		padding: 16px;
	}

	.block {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 16px;

		min-height: var(--headerHeight);
		max-width: var(--pageWidth);
		width: 100%;
		margin: auto;
		padding: 0 16px;

		border-radius: 100px;
		outline: 1px solid var(--ol);
		background: color-mix(in srgb, var(--bg) 60%, transparent);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);

		@media screen and (min-width: 580px) {
			padding: 0 24px;
		}
	}

	a {
		display: flex;
		align-items: center;
		gap: 8px;

		color: var(--ft1);
		fill: var(--cl1);
		font-weight: 800;
		text-decoration: none;
		font-size: 1.2rem;

		transition: color 0.2s ease-in-out;
	}

	img {
		width: 32px;
		height: 32px;
		object-fit: contain;
	}

	.links {
		display: none;
		gap: 32px;

		a {
			font-size: 0.9rem;
			font-weight: 600;
			color: var(--ft2);

			&:hover {
				color: var(--ft1);
			}
		}
	}

	.right {
		display: flex;
		align-items: center;
		gap: 16px;
	}

	.hamburger {
		--hamburger-background-color: var(--bg2);
		--hamburger-color: var(--ft2);
	}

	@media screen and (min-width: 900px) {
		.links {
			display: flex;
		}
		.hamburger {
			display: none;
		}
	}

	.mobile_menu {
		display: flex;
		flex-direction: column;
		gap: 8px;

		max-width: var(--pageWidth);
		width: 100%;
		margin: 8px auto 0 auto;
		padding: 16px 24px;

		border-radius: 16px;
		outline: 1px solid var(--ol);
		background-color: var(--bg);

		a {
			font-size: 0.9rem;
			font-weight: 600;
			color: var(--ft2);
			padding: 8px 0;

			&:hover {
				color: var(--ft1);
			}
		}
	}

	@media screen and (min-width: 900px) {
		.mobile_menu {
			display: none;
		}
	}
</style>
