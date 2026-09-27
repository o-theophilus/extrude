<script>
	import { LinkArrow } from '$lib/button';
	import { whatsapp } from '$lib/store.svelte.js';
</script>

<div class="bg_1 light">
	<section>
		<div class="padding_5 grid_container">
			<div class="grid_2_1000 gap_80">
				<div class="design_left">
					<h2>
						No 3D file?<br /><span class="fc_1"> No problem </span>
						.
					</h2>
					<p class="margin_24 max_text">
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
							href="https://wa.me/{whatsapp}?text=Hi Extrude, I'd like help turning a photo/sketch/idea into a 3D model."
							blank
						>
							Ask About Modelling
						</LinkArrow>
					</div>
				</div>

				<img src="image/design.webp" alt="3d modelling" class="brad_16" />
			</div>
		</div>
	</section>
</div>

<style>
	img {
		object-fit: cover;
		width: 100%;
		height: 100%;
		aspect-ratio: 4/3;

		@container (min-width: 1000px) {
			/* aspect-ratio: 1; */
		}
	}
</style>
