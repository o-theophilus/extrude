<script>
	import { LinkArrow } from '$lib/button';
	import { Icon } from '$lib/macro';
	import { waLink } from '$lib/whatsapp.js';
</script>

<div class="bg margin_160">
	<section>
		<div class="padding_5 grid_container">
			<div class="grid_2_1000 gap_80">
				<div class="design_left">
					<h2>No 3D file? No problem.</h2>
					<p class="margin_24">
						You don't need to know how to model in 3D to get something printed. Send us a photo,
						sketch or description and we'll let you know what can be done.
					</p>

					<ul class="circle-check margin_24">
						<li>Simple 3D modelling</li>
						<li>Model modifications</li>
						<li>Print ready file preparation</li>
						<li>Basic recreation of existing parts</li>
					</ul>

					<div class="margin_24">
						<LinkArrow
							href={waLink(
								"Hi Extrude, I'd like help turning a photo/sketch/idea into a 3D model."
							)}
							blank
						>
							Ask About Modelling
						</LinkArrow>
					</div>
				</div>

				<div class="design_right bg_2 outline brad_16">
					<Icon icon="pencil-ruler" size="64" />
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	.bg {
		background-color: hsl(173, 68%, 79%);
	}

	.design_right {
		display: flex;
		align-items: center;
		justify-content: center;

		min-height: 240px;
		color: var(--cl1);
	}
</style>
