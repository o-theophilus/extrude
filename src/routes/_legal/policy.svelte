<script>
	import { Tag } from '$lib/button';
	import { Icon, Marked } from '$lib/macro';

	import { cookiesPolicy, privacyPolicy } from './policy.js';
</script>

<div class="popup">
	<h3>Privacy & Data Policy</h3>
	<Tag>
		<em> Last Updated: </em>
		1 October 2026
	</Tag>

	<p class="margin_16 note">
		<Marked content={privacyPolicy}></Marked>
	</p>

	<div class="section_title">
		<Icon icon="cookie" size="24"></Icon>
		Cookies Policy
	</div>

	<p class="margin_16 note">
		<Marked content={cookiesPolicy}></Marked>
	</p>
</div>

<style>
	.popup {
		padding: 24px;
	}
</style>
