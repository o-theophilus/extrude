<script>
	import { Box, Clock, createIcons, Palette, Printer } from 'lucide';
	import { onMount } from 'svelte';

	onMount(() => {
		createIcons({
			icons: {
				Box,
				Palette,
				Printer,
				Clock
			},
			attrs: {
				'stroke-width': 2.5
			},
			nameAttr: 'icon'
		});
	});

	let materials = [
		{
			name: 'PLA',
			text: 'Versatile, reliable and ideal for everyday prints, models, gifts and decorative pieces.'
		},
		{
			name: 'PLA Matte',
			text: 'A smooth, understated finish for premium looking models and display pieces.'
		},
		{
			name: 'PLA Silk',
			text: 'A distinctive finish for decorative pieces, gifts and eye catching designs.'
		},
		{
			name: 'PETG',
			text: 'Durable and suitable for functional parts that need more strength and resistance.'
		},
		{ name: 'TPU', text: 'Flexible printing for applications that need some give.' }
	];

	let capabilities = [
		{ icon: 'box', label: 'Build Volume', value: '220 × 220 × 220 mm' },
		{ icon: 'palette', label: 'Multi Colour', value: 'Up to 4 colours' },
		{ icon: 'printer', label: 'Print Type', value: 'FDM 3D printing' },
		{ icon: 'clock', label: 'Typical Turnaround', value: '2 to 5 working days' }
	];
</script>

<div class="bg_5 dark">
	<section>
		<div id="materials" class="padding_5 grid_container">
			<h2 class="max_text">The right material for the job.</h2>
			<p class="max_text margin_16 font_14">
				Different projects need different properties. We offer a selection of materials and colours
				to suit the way your print will look and be used.
			</p>

			<div class="spec margin_60">
				{#each materials as x}
					<div class="one">
						<h4>{x.name}</h4>
						<p>{x.text}</p>
					</div>
				{/each}
			</div>

			<div class="grid grid_4_b gap_8 margin_40">
				{#each capabilities as x}
					<div class="card outline brad_16 padding_24 center">
						<div class="icon bg_4 fc_2 center">
							<svg icon={x.icon}></svg>
						</div>
						<h4 class="margin_16">{x.value}</h4>
						<p class="font_08">{x.label}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>
</div>

<style>
	.one {
		border-top: solid 1px hsl(0, 0%, 20%);
		padding: 16px 0;
		display: flex;
		flex-direction: column;

		h4 {
			width: 12rem;
			flex-shrink: 0;
		}

		@container (min-width:480px) {
			align-items: center;
			flex-direction: row;
		}
	}

	.grid {
		@container (min-width:600px) {
			gap: 16px !important;
		}
	}

	.card {
		background-color: #202127;
	}
</style>
