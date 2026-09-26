<script>
	import { Button } from '$lib/button';
	import { module } from '$lib/store.svelte.js';
	import ContactForm from './contact.svelte';
</script>

<div class="bg_6">
	<section>
		<div class="bg_3 padding_64 center brad_32 outline">
			<div class="eyebrow center">HAVE SOMETHING IN MIND?</div>
			<h2 class="margin_16">Let's make it real.</h2>
			<p class="margin_16">
				Send us your idea, file, photo or sketch and let's work out what it will take to print it.
			</p>

			<div class="margin_40 row gap_16 center">
				<Button
					--button-background-color="var(--cta)"
					--button-background-color-hover="var(--cta_)"
					--button-color="white"
					--button-outline-color="transparent"
					icon2="arrow-right"
					onclick={() => {
						module.open(ContactForm);
					}}
				>
					Request a Quote
				</Button>
			</div>

			<p class="margin_16 font_08">We'll ask a few quick questions to get your enquiry started.</p>
		</div>
	</section>
</div>
