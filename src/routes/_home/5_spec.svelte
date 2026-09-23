<script>
	import { Icon } from '$lib/macro';

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


	<div class="bg margin_160">
		<section>
			<div id="materials" class="margin_160 grid_container">
				<h2 class="max_text">The right material for the job.</h2>
				<p class="max_text margin_16">
					Different projects need different properties. We offer a selection of materials and
					colours to suit the way your print will look and be used.
				</p>

				<div class="grid_3 gap_16 margin_80">
					{#each materials as x}
						<div class="tile bg_6 outline brad_16 padding_24">
							<h4>{x.name}</h4>
							<p class="margin_16">{x.text}</p>
						</div>
					{/each}
				</div>

				<div class="grid_3 gap_16 margin_40">
					{#each capabilities as x}
						<div class="tile bg_6 outline brad_16 padding_24 center">
							<div class="icon bg_4 fc_2">
								<Icon icon={x.icon} size="24" />
							</div>
							<h4 class="margin_16">{x.value}</h4>
							<p class="margin_16 font_08">{x.label}</p>
						</div>
					{/each}
				</div>
			</div>
		</section>
	</div>

