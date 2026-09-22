<script>
	import { Button, Tag } from '$lib/button';
	import { Icon, Marked } from '$lib/macro';
	import { module } from '$lib/store.svelte.js';

	import { cookiesPolicy, privacyPolicy } from './legal.policy.js';
</script>

<div class="popup">
	<h4>Privacy & Data Policy</h4>
	<p class="margin_16">How we collect, use and protect information submitted through Extrude.</p>

	<Tag>
		<em> Last Updated: </em>
		16 may 2026
	</Tag>

	<p class="margin_16 note">
		<Marked content={privacyPolicy}></Marked>
	</p>

	<div class="section_title" id="cookiesPolicy">
		<Icon icon="cookie" size="24"></Icon>
		Cookies Policy
	</div>

	<p class="margin_16 note">
		<Marked content={cookiesPolicy}></Marked>
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
