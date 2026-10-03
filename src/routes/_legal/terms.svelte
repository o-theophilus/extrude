<script>
	import { Tag } from '$lib/button';
	import { Marked } from '$lib/macro';

	import { content } from './terms.js';
</script>

<div class="popup">
	<h4>Terms & Conditions</h4>
	<Tag>
		<em> Last Updated: </em>
		1 October 2026
	</Tag>

	<p class="margin_16 note">
		<Marked {content}></Marked>
	</p>
</div>

<style>
	.popup {
		padding: 24px;
	}
</style>
