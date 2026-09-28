<script>
	import { Button } from '$lib/button';
	import { module } from '$lib/store.svelte.js';
	import One from './2_work.one.svelte';
	import ContactForm from './contact.svelte';

	const whatWePrint = [
		{
			title: 'Custom & Personalised',
			text: 'Unique objects, décor, gifts, collectibles and personalised pieces made to your specifications.',
			imgs: ['a.1.webp', 'a.2.webp']
		},
		{
			title: 'Business & Branding',
			text: 'Branded displays, logo pieces, awards, promotional items and custom products for your business.',
			imgs: ['b.1.webp']
		},
		{
			title: 'Prototypes & Models',
			text: 'Turn ideas into physical models for testing, presentation, product development and validation.',
			imgs: ['c.1.webp', 'c.2.webp', 'c.3.webp']
		},
		{
			title: 'Functional Parts',
			text: 'Practical brackets, mounts, enclosures, fixtures, replacement parts and other made to fit components.',
			imgs: ['d.1.webp', 'd.2.webp', 'd.3.webp', 'd.4.webp', 'd.5.webp', 'd.6.webp']
		}
	];
</script>

<div class="margin_160">
	<section>
		<div class="grid_container">
			<div class="grid grid_3 gap_8">
				<div class="title bg_2 dark padding_40 brad_16">
					<h2>Our 3D Printing Services</h2>
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
