<script>
	import { Link } from '$lib/button';
	import { module } from '$lib/store.svelte.js';
	import Policy from '../_legal/policy.svelte';
	import Terms from '../_legal/terms.svelte';
</script>

<div class="block">
	<Link onclick={() => module.open(Policy)}>Privacy Policy</Link>
	•
	<Link onclick={() => module.open(Terms)}>Terms of Service</Link>
</div>

<style>
	.block {
		width: fit-content;

		--link-font-size: 0.8rem;
		--link-font-weight: 400;
	}
</style>
