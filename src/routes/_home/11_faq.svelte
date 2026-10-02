<script>
	import { Card } from '$lib/layout';

let faqs = [
	{
		q: 'Do I need a 3D file?',
		a: "No. You can send us a photo, sketch or description of what you need. If your idea needs 3D modelling, we'll let you know and quote it separately."
	},
	{
		q: 'What can you 3D print?',
		a: 'We print custom products, prototypes, branded pieces, gifts, replacement parts, functional components and more. If you are not sure whether your idea can be printed, send it to us and we will assess it.'
	},
	{
		q: 'How much does 3D printing cost?',
		a: "Every project is different. Pricing depends on factors such as size, material, print time, quantity, colour and finishing. Send us your requirements and we'll provide a clear quote."
	},
	{
		q: 'How long does a print take?',
		a: 'Most standard orders are completed within 2 to 5 working days after quote approval. Larger, more complex or higher quantity orders may take longer, and we will confirm the estimated turnaround with your quote.'
	},
	{
		q: 'What materials can I choose from?',
		a: 'We currently offer PLA, PLA Matte, PLA Silk, PETG and TPU. Each material has different properties, so we can recommend the most suitable option based on how you plan to use the print.'
	},
	{
		q: 'Can you recreate a part I already have?',
		a: "In many cases, yes. Send us clear photos and measurements of the part and we'll assess whether it can be recreated. The complexity of the part may affect the modelling cost."
	},
	{
		q: 'Can I order just one piece?',
		a: 'Absolutely. You can order a single custom print or multiple pieces. There is no minimum order quantity for standard 3D printing jobs.'
	},
	{
		q: 'Do you offer delivery?',
		a: 'Yes. We offer delivery within Lagos and can arrange nationwide delivery depending on the size and destination of your order. Delivery costs will be included in your quote where applicable.'
	},
	{
		q: 'Where are you based?',
		a: 'Extrude is based in Lagos, Nigeria. We serve customers across Lagos and can arrange nationwide delivery depending on your order.'
	},
	{
		q: 'How do I place an order?',
		a: "Start by requesting a quote and send us your 3D file, photo, sketch or description. We'll review your requirements, confirm the price and turnaround time, and begin production once you approve the quote."
	}
];

	let ops = $state({ open: null });
</script>

{#snippet card(faq)}
	<Card
		open={ops.open == faq.q}
		onclick={() => {
			if (ops.open == faq.q) {
				ops.open = null;
			} else {
				ops.open = faq.q;
			}
		}}
	>
		{#snippet title()}
			<div class="q">
				{faq.q}
			</div>
		{/snippet}
		<div class="a">
			{@html faq.a}
		</div>
	</Card>
{/snippet}

<div class="bg_6">
	<section>
		<div id="faq" class="padding_5">
			<h2 class="center">Questions? We've got answers.</h2>
			<div class="margin_40 faq">
				<div class="cards">
					{#each faqs as faq, i}
						{#if i % 2 == 0}
							{@render card(faq)}
						{/if}
					{/each}
				</div>

				<div class="cards">
					{#each faqs as faq, i}
						{#if i % 2 != 0}
							{@render card(faq)}
						{/if}
					{/each}
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	.faq {
		display: flex;
		flex-direction: column;
		gap: 0 8px;

		@media screen and (min-width: 580px) {
			& {
				flex-direction: unset;
			}
		}

		& .cards {
			width: 100%;
		}
	}

	.cards {
		--card-outline-color: var(--ol);
		--card-title-padding: 12px 16px;
		--card-content-padding: 0 16px 16px 16px;
		--card-background-color: white;

		& .q {
			font-weight: 800;
			font-size: 0.9rem;
			color: var(--ft1);
			display: flex;
			align-items: center;
		}

		& .a {
			font-size: 0.8rem;
			color: var(--ft2);
		}
	}
</style>
