<script>
	import CTA from '$lib/cta.svelte';
	import { Clock, Copy, Layers, Maximize, Sparkles, createIcons } from 'lucide';
	import { onMount } from 'svelte';

	onMount(() => {
		createIcons({
			icons: {
				Maximize,
				Layers,
				Clock,
				Copy,
				Sparkles
			},
			attrs: {
				'stroke-width': 2.5
			},
			nameAttr: 'icon'
		});
	});

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

<div class="bg_2 dark">
	<video src="/image/bg.mp4" autoplay muted loop playsinline></video>
	<section id="what-we-print">
		<div class="padding_5 grid_container">
			<h2 class="max_text">Get a quote based on your project.</h2>
			<p class="max_text margin_16 font_14">
				Every print is different, so we price each job based on what it actually takes to produce.
			</p>

			<div class="grid_4_b gap_a margin_80">
				{#each pricingFactors as x}
					<div class="card">
						<div class="icon left bg_4 fc_2">
							<svg icon={x.icon}></svg>
						</div>
						<h4 class="margin_16">{x.title}</h4>
						<p class="margin_8">{x.text}</p>
					</div>
				{/each}
			</div>

			<div class="margin_40">
				<CTA>Request a Quote</CTA>
			</div>

			<p class="margin_16 font_08">
				Send us the details and we'll give you a clear price for your specific job.
			</p>
		</div>
	</section>
</div>

<style>
	.bg_2 {
		position: relative;
		z-index: 0;
	}

	video {
		opacity: 0.2;
		position: absolute;
		z-index: -1;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	h2,
	h4 {
		color: var(--ft1_dark);
	}
</style>
