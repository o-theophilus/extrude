<script>
	import { Button, Tag } from '$lib/button';
	import { Marked } from '$lib/macro';
	import { module } from '$lib/store.svelte.js';

	import { content } from './legal.terms.js';
</script>

<div class="popup">
	<h4>Terms & Conditions</h4>
	<p class="margin_16">The terms and conditions governing your use of Extrude.</p>

	<Tag>
		<em> Last Updated: </em>
		16 may 2026
	</Tag>

	<p class="margin_16 note">
		<Marked {content}></Marked>
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
</style>
