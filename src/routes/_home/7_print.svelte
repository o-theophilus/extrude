<script>
	import { LinkArrow } from '$lib/button';
	import { Icon } from '$lib/macro';
	import { module } from '$lib/store.svelte.js';
	import QuotePopup from './quote.popup.svelte';

	let pricingFactors = [
		{
			icon: 'maximize',
			title: 'Size',
			text: 'Larger prints generally require more material and machine time.'
		},
		{
			icon: 'layers',
			title: 'Material',
			text: 'The material selected affects both appearance and performance.'
		},
		{
			icon: 'clock',
			title: 'Print Time',
			text: 'More complex or detailed prints can require longer production times.'
		},
		{
			icon: 'copy',
			title: 'Quantity',
			text: 'Multiple pieces may change the overall production cost.'
		},
		{
			icon: 'sparkles',
			title: 'Finishing',
			text: 'Sanding, painting, assembly and other finishing work can be added when needed.'
		}
	];
</script>

<div class="bg">
	<section id="what-we-print">
		<div class="padding_5 grid_container">
			<h2 class="center max_text">Get a quote for your print.</h2>
			<p class="center max_text margin_16">
				Every print is different, so we price each job based on what it actually takes to produce.
			</p>

			<div class="grid_4_b gap_a margin_80">
				{#each pricingFactors as x}
					<div class="card">
						<div class="icon left bg_4 fc_2">
							<Icon icon={x.icon} size="24" />
						</div>
						<h4 class="margin_16">{x.title}</h4>
						<p class="margin_16">{x.text}</p>
					</div>
				{/each}
			</div>

			<div class="center margin_40">
				<LinkArrow
					onclick={() => {
						module.open(QuotePopup);
					}}>Request a Quote</LinkArrow
				>
				<p class="margin_16 font_08">
					Send us the details and we'll give you a clear price for your specific job.
				</p>
			</div>
		</div>
	</section>
</div>

<style>
	.bg {
		background-color: rgb(0, 61, 61);
		color: var(--ft2_dark);
	}

	h2,
	h4 {
		color: var(--ft1_dark);
	}
</style>
