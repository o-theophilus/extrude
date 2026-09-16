<script>
</script>

<div class="orientation grid_container">
	<div class="steps">
		<div class="line"></div>
	</div>

	<div class="grid_3a gap_16">
		<div class="card a">
			<div class="block bg_6 brad_16 outline">
				<img src="/image/home.how.1.png" alt="Request a delivery" />
				<div class="padding_24">
					<h4>Request a delivery</h4>
					<p class="margin_16">We prepare a delivery drone for flight instantly.</p>
				</div>
			</div>
		</div>
		<div class="card b">
			<div class="block bg_6 brad_16 outline">
				<img src="/image/home.how.2.png" alt="Select a drop zone" />
				<div class="padding_24">
					<h4>Choose a drop zone</h4>
					<p class="margin_16">We calculate the fastest, safest route through the sky.</p>
				</div>
			</div>
		</div>
		<div class="card c">
			<div class="block bg_6 brad_16 outline">
				<img src="/image/home.how.3.png" alt="Receive your delivery" />
				<div class="padding_24">
					<h4>Receive your delivery</h4>
					<p class="margin_16">Your order lands with precision at your chosen drop zone.</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.orientation {
		--gap: 32px;
		--width: 68px;

		display: flex;
		gap: var(--gap);

		.steps {
			display: flex;
			justify-content: center;
			align-items: center;
			width: var(--width);
			flex-shrink: 0;

			.line {
				width: 2px;
				height: 100%;
				background-color: var(--ol);
			}
		}

		@container (min-width: 580px) {
			flex-direction: column;

			.steps {
				width: 100%;
				height: var(--width);

				.line {
					height: 2px;
					width: 100%;
				}
			}
		}
	}

	.card {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		&::before {
			display: flex;
			align-items: center;
			justify-content: center;

			border-radius: 40%;
			width: var(--width);
			height: var(--width);

			background-color: var(--bg2);
			font-size: 2rem;
			line-height: 0;
			outline: 1px solid var(--ol);
			outline-offset: -1px;
			color: var(--ft1);

			position: absolute;
			right: calc(100% + var(--gap));
			@container (min-width: 580px) {
				right: unset;
				bottom: calc(100% + var(--gap));
			}
		}
		&.a::before {
			content: '01';
		}
		&.b::before {
			content: '02';
		}
		&.c::before {
			content: '03';
		}
	}

	.block {
		overflow: hidden;
		height: 100%;
		img {
			height: unset;
		}
	}
</style>
