<script>
	import CTA from '$lib/cta.svelte';
	import One from './2_work.one.svelte';

	const whatWePrint = [
		{
			title: 'Custom & Personalised',
			text: 'Unique objects, décor, gifts, collectibles and personalised pieces made to your specifications.',
			img: 'a.1.webp'
		},
		{
			title: 'Business & Branding',
			text: 'Branded displays, logo pieces, awards, promotional items and custom products for your business.',
			img: 'a.2.webp'
		},
		{
			title: 'Prototypes & Models',
			text: 'Turn ideas into physical models for testing, presentation, product development and validation.',
			img: 'c.1.webp'
		},
		{
			title: 'Functional Parts',
			text: 'Practical brackets, mounts, enclosures, fixtures, replacement parts and other made to fit components.',
			img: 'd.1.webp'
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
						<CTA>Request a Quote</CTA>
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
