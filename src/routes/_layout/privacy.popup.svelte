<script>
	import { Button } from '$lib/button';
	import { module } from '$lib/store.svelte.js';
</script>

<div class="popup">
	<h4>Privacy Policy</h4>
	<p class="margin_16">
		How we collect, use and protect information submitted through Extrude.
	</p>

	<p class="margin_16 note">
		Full policy text to be added here.
	</p>

	<Button --button-width="100%" onclick={() => module.close()}>Close</Button>
</div>

<style>
	.popup {
		padding: 24px;
	}

	.note {
		font-size: 0.9rem;
		color: var(--ft2);
	}

	:global(.popup > :last-child) {
		margin-top: 24px;
	}
</style>
