<script>
	import { Link } from '$lib/button';
	import { module } from '$lib/store.svelte.js';
	import Policy from './legal.policy.svelte';
	import Terms from './legal.terms.svelte';
</script>

<section>
	<div class="block">
		<div class="title">Explore</div>
		<Link href="/#what-we-print">What We Print</Link>
		<Link href="/#how-it-works">How It Works</Link>
		<Link href="/#materials">Materials</Link>
		<Link href="/#faq">FAQ</Link>
	</div>
	<div class="block">
		<div class="title">Legal</div>
		<Link onclick={() => module.open(Policy)}>Privacy Policy</Link>
		<Link onclick={() => module.open(Terms)}>Terms of Service</Link>
	</div>
</section>

<style>
	section {
		display: flex;
		gap: 40px;
		flex-wrap: wrap;
	}

	.block {
		display: flex;
		flex-direction: column;
		gap: 4px;
		width: fit-content;

		--link-font-size: 0.8rem;
		--link-color: var(--ft2);
		--link-font-weight: 400;

		& .title {
			color: var(--ft1);
			font-weight: 600;
			margin-bottom: 8px;
		}
	}
</style>
