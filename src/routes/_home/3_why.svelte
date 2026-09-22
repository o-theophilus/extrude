<script>
	import { Icon } from '$lib/macro';

	const whyPrint = [
		{
			icon: 'box',
			title: 'One piece is enough',
			text: 'Need just one? No problem. Create a single custom piece without ordering hundreds.'
		},
		{
			icon: 'clipboard-list',
			title: 'Prototype before production',
			text: 'Test the size, shape and feel of a product before investing in manufacturing.'
		},
		{
			icon: 'lightbulb',
			title: 'Create what you cannot find',
			text: 'When an off the shelf solution does not exist, make one that fits your exact needs.'
		},
		{
			icon: 'layers',
			title: 'Small batches made simple',
			text: 'Produce limited quantities without the setup and tooling required by traditional manufacturing.'
		}
	];
</script>

<div class="bg">
	<section>
		<div class="padding_5 grid_container">
			<h2 class="max_text">Make what you need, when you need it.</h2>
			<p class="max_text margin_16">
				3D printing gives you the freedom to create without committing to expensive tooling or large
				production runs.
			</p>

			<div class="grid_4 gap_a margin_80">
				{#each whyPrint as x}
					<div >
						<div class="icon left bg_4 fc_2">
							<Icon icon={x.icon} size="24" />
						</div>
						<h4 class="margin_16">{x.title}</h4>
						<p class="margin_16">{x.text}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>
</div>

<style>
	.bg {
		background-color: hsl(197, 71%, 73%);
	}
</style>
