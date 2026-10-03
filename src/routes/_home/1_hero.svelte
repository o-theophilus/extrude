<script>
	import CTA from '$lib/cta.svelte';
	import Model from './1_model.svelte';
	import { Box, Palette, Zap, createIcons } from 'lucide';
	import { onMount } from 'svelte';

	onMount(() => {
		createIcons({
			icons: {
				Box,
				Palette,
				Zap
			},
			attrs: {
				'stroke-width': 2.5
			},
			nameAttr: 'icon'
		});
	});

	const hero = [
		{
			icon: 'box',
			title: 'Made to order',
			text: 'Every print is produced for your specific needs, from a single piece to small batches.'
		},
		{
			icon: 'palette',
			title: 'Made your way',
			text: 'Choose from a range of materials, colours and finishes to get the result you want.'
		},
		{
			icon: 'zap',
			title: 'From idea to object',
			text: "Send us a file, photo, sketch or description and we'll help turn it into a physical product."
		}
	];
</script>

<section class="grid_container margin_60 light">
	<h1>
		Turn your ideas into <span class="fc_1">something you can hold.</span>
	</h1>

	<div class="top margin_40">
		<div class="left">
			<p class="font_14">
				From custom products and prototypes to functional parts and branded pieces, we bring your
				ideas to life through precision 3D printing.
			</p>

			<div class="margin_40 cta">
				<CTA hero>Request a Quote</CTA>
			</div>
		</div>

		<div class="right">
			<Model></Model>
		</div>
	</div>

	<div class="cards margin_80">
		{#each hero as x, i}
			{#if i > 0}
				<div class="divider"></div>
			{/if}

			<div class="card">
				<div class="icon left bg_4 f1_dark">
					<svg icon={x.icon}></svg>
				</div>
				<div class="text">
					<h4>{x.title}</h4>
					<p class="margin_8">{x.text}</p>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.top {
		display: flex;
		flex-direction: column;

		@container (min-width: 1000px) {
			flex-direction: row;
		}

		.right,
		.left {
			width: 100%;
		}

		.left {
			max-width: 800px;
		}

		.right {
			position: relative;
			aspect-ratio: 4/2;
			z-index: 0;
			/* background-color: gray; */
		}

		.cta {
			position: relative;
			z-index: 1;
		}
	}

	.cards {
		display: flex;
		flex-direction: column;
		gap: 24px 40px;

		.card {
			display: flex;
			gap: 24px;
		}

		.divider {
			height: 1px;
			background-color: var(--line1);
		}

		@container (min-width: 730px) {
			flex-direction: row;

			.divider {
				height: unset;
				width: 1px;
			}
			.card {
				flex-direction: column;
			}
		}

		@container (min-width: 830px) {
			.card {
				flex-direction: row;
			}
		}
	}
</style>
