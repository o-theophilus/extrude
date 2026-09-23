<script>
	import { Button } from '$lib/button';
	import { module } from '$lib/store.svelte.js';
	import QuotePopup from './quote.popup.svelte';
</script>

<section>
	<div class="margin_160 bg_3 padding_64 center brad_32 outline">
		<div class="eyebrow center">HAVE SOMETHING IN MIND?</div>
		<h2 class="max_text margin_16">Let's make it real.</h2>
		<p class="margin_16 max_text">
			Send us your idea, file, photo or sketch and let's work out what it will take to print it.
		</p>

		<div class="margin_40 row gap_16">
			<Button
				--button-background-color="var(--cl3)"
				--button-background-color-hover="var(--cl3_)"
				--button-color="white"
				--button-outline-color="transparent"
				icon2="arrow-up-right"
				onclick={() => {
					module.open(QuotePopup);
				}}
			>
				Request a Quote
			</Button>
		</div>

		<p class="margin_16 max_text font_08">
			We'll ask a few quick questions to get your enquiry started.
		</p>
	</div>
</section>
