<script>
</script>

<div class="margin_160">
	<section class="grid_container">
		<div class="block bg_2 dark padding_40 brad_16">
			<div class="left">
				<h3>Built one print at a time.</h3>
				<p class="margin_8 font_14">
					From one off custom pieces to functional parts and small batches, we're helping turn ideas
					into something real.
				</p>
			</div>

			<div class="right">
				<div>
					<h3>100+</h3>
					<p>Prints completed</p>
				</div>

				<div>
					<h3>25+</h3>
					<p>Customers served</p>
				</div>

				<div>
					<h3>15+</h3>
					<p>Custom projects</p>
				</div>

				<div>
					<h3>95%</h3>
					<p>On time delivery</p>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	.block {
		display: flex;
		flex-direction: column;
		gap: 40px 80px;

		@container (min-width: 600px) {
			padding: 64px !important;
		}

		@container (min-width: 800px) {
			flex-direction: row;
		}
	}

	.left{
		align-self: center;
	}

	.right {
		display: grid;
		gap: 24px;
		grid-template-columns: 1fr 1fr;

		flex-shrink: 0;
		align-items: center;
	}
</style>
