<script>
	import { Button } from '$lib/button';
	import { module } from '$lib/store.svelte.js';
	import One from './2_work.one.svelte';
	import ContactForm from './contact.svelte';

	const whatWePrint = [
		{
			title: 'Custom & Personalised',
			text: 'Unique objects, décor, gifts, collectibles and personalised pieces made to your specifications.',
			imgs: ['1.webp', '2.webp', '3.webp', '4.webp', '5.webp']
		},
		{
			title: 'Business & Branding',
			text: 'Branded displays, logo pieces, awards, promotional items and custom products for your business.',
			imgs: ['2.webp', '3.webp', '4.webp', '5.webp']
		},
		{
			title: 'Prototypes & Models',
			text: 'Turn ideas into physical models for testing, presentation, product development and validation.',
			imgs: ['3.webp', '4.webp', '5.webp']
		},
		{
			title: 'Functional Parts',
			text: 'Practical brackets, mounts, enclosures, fixtures, replacement parts and other made to fit components.',
			imgs: ['4.webp', '5.webp']
		}
	];
</script>

<div class="margin_160">
	<section>
		<div class="grid_container">
			<div class="grid grid_3 gap_8">
				<div class="title bg_2 dark padding_40 brad_16">
					<h2>What can we print for you?</h2>
					<p class="margin_8 font_14">
						From useful everyday parts to custom pieces made for your brand, 3D printing makes it
						possible to create exactly what you need.
					</p>

					<div class="margin_40">
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
				</div>

				{#each whatWePrint as one}
					<One {one}></One>
				{/each}
			</div>
		</div>
	</section>
</div>

<style>
	.title {
		grid-column: span 2;
		align-content: center;

		@container (min-width: 600px) {
			padding: 64px !important;
		}
	}

	.grid {
		@container (min-width: 600px) {
			gap: 16px !important;
		}
	}
</style>
