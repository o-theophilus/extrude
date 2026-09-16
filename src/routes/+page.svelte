<script>
	import { Button } from '$lib/button';
	import { Icon, Meta, ToTop } from '$lib/macro';
	import { FAQ, How, Metrics, Popup, Scenario1, Scenario2, Summary } from './_home';

</script>

<Meta
	title="Home"
	description="Extrude is an aerial logistics network. Get food, medicine, and everyday essentials delivered by drone in minutes."
/>

<div class="page_css">
	<section>
		<div class="grid_container margin_80">
			<div class="grid_2_1000 gap_80">
				<div class="hero_left">
					<h1>
						The air layer of
						<span class="fc_1">urban logistics. </span>
					</h1>
					<p class="margin_24 font_14">
						An aerial delivery network built for speed, precision, and reliability in modern
						logistics.
					</p>
					<div class="margin_40 row gap_16">
						<Button
							--button-background-color="var(--cl3)"
							--button-background-color-hover="var(--cl3_)"
							--button-color="white"
							--button-outline-color="transparent"
							href="/"
							icon2="arrow-right"
						>
							Let's Help You Deliver
						</Button>
						<Button
							--button-background-color="transparent"
							--button-outline-color="var(--ft2)"
							--button-color="var(--ft1)"
							href="/"
						>
							See how it works
						</Button>
					</div>

					<p class="margin_24 font_08">Currently Serving Lagos, Nigeria.</p>

					<div class="summary1 margin_40">
						<Summary></Summary>
					</div>
				</div>

				<div class="hero_right">
					<video src="/image/home.title.mp4" autoplay muted loop playsinline></video>
					<div class="popup">
						<Popup />
					</div>
				</div>
			</div>
			<div class="summary2 margin_80">
				<Summary mobile></Summary>
			</div>
		</div>

		<div class="margin_160">
			<Scenario1 />
		</div>

		<div class="margin_160">
			<h6 class="section_title">
				<div class="chevron">
					<Icon icon="logo-shape" size="16" />
				</div>
				How it Works
			</h6>
			<div class="margin_40 grid_container">
				<How />
			</div>
		</div>
	</section>

	<div class="bg_1 margin_160">
		<section>
			<div class="padding_5 grid_container">
				<h2 class="max_text center">
					Built for speed. Designed for precision. Powered by intelligence.
				</h2>

				<div class="why grid_3a gap_a margin_80">
					<div class="card">
						<div class="datails">
							<div class="icon left bg_4 fc_2">
								<Icon icon="zap" size="24" />
							</div>
							<h4 class="margin_16">Instant Delivery</h4>
							<p class="margin_16">
								Minutes, not hours. Extrude bypasses traffic entirely, delivering what you need,
								exactly when you need it.
							</p>
						</div>
						<img class="margin_24" src="/image/home.why.1.jpg" alt="Instant Delivery" />
					</div>

					<div class="card">
						<div class="datails">
							<div class="icon left bg_4 fc_2">
								<Icon icon="crosshair" size="24" />
							</div>
							<h4 class="margin_16">Pinpoint Precision</h4>
							<p class="margin_16">
								Advanced routing and drop technology ensure every delivery arrives at the right
								place, every time.
							</p>
						</div>
						<img class="margin_24" src="/image/home.why.2.jpg" alt="Instant Delivery" />
					</div>

					<div class="card">
						<div class="datails">
							<div class="icon left bg_4 fc_2">
								<Icon icon="leaf" size="24" />
							</div>
							<h4 class="margin_16">Smarter, Cleaner</h4>
							<p class="margin_16">
								Electric drones reduce congestion, cut emissions, and create a more efficient way to
								move goods across cities.
							</p>
						</div>
						<img class="margin_24" src="/image/home.why.3.jpg" alt="Instant Delivery" />
					</div>
				</div>
			</div>
		</section>
	</div>

	<section>
		<div class="margin_160">
			<h2 class="center">Reliable by design</h2>
			<div class="margin_80">
				<Metrics />
			</div>
		</div>

		<div class="margin_160">
			<h6 class="section_title">
				<div class="chevron">
					<Icon icon="logo-shape" size="16" />
				</div>
				Made for everyday delivery
			</h6>
			<div class="margin_40">
				<Scenario2 />
			</div>
		</div>

		<div class="margin_160">
			<h2 class="max_text center">Trusted in real moments</h2>
			<p class="max_text center margin_16">
				See how people are skipping traffic and getting things delivered through the air with
				Extrude.
			</p>
		
		</div>

		<div class="margin_160">
			<h2 class="center">FAQ</h2>
			<div class="margin_40">
				<FAQ></FAQ>
			</div>
		</div>

		<div class="margin_160 bg_3 padding_64 center brad_32 outline">
			<h2 class="max_text">Move faster with us</h2>
			<p class="margin_16 max_text">
				Send and receive deliveries in minutes, or partner with us to reach more customers.
			</p>

			<div class="margin_40 row gap_16">
				<Button
					--button-background-color="var(--cl3)"
					--button-background-color-hover="var(--cl3_)"
					--button-color="white"
					--button-outline-color="transparent"
					href="/"
					icon2="arrow-right"
				>
					Start delivery
				</Button>
				<Button
					--button-background-color="transparent"
					--button-outline-color="var(--ft2)"
					--button-color="var(--ft1)"
					href="/"
				>
					Partner with us
				</Button>
			</div>
		</div>

	

		<ToTop />
	</section>

	<div class="margin_80"></div>
</div>

<style>
	.section_title {
		display: flex;
		align-items: center;
		gap: 16px;

		width: fit-content;
		margin: auto;
		border-radius: 100px;
		border: 1px solid var(--ol);
		padding: 16px 24px;

		color: var(--ft1);

		.chevron {
			display: flex;
			fill: var(--cl1);
		}
	}

	.hero_left {
		h1,
		p {
			max-width: 800px;
			text-align: center;
			margin-left: auto;
			margin-right: auto;

			@container (min-width: 1000px) {
				text-align: left;
			}
		}

		.row {
			@container (min-width: 1000px) {
				justify-content: flex-start;
			}
		}
	}

	.summary1 {
		display: none;
	}
	.summary2 {
		display: block;
	}
	@container (min-width: 1000px) {
		.summary1 {
			display: block;
		}
		.summary2 {
			display: none;
		}
	}

	.hero_right {
		position: relative;
		line-height: 0;

		video {
			border-radius: 24px;
			width: 100%;
			aspect-ratio: 1;
			object-fit: cover;
		}

		.popup {
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
		}

		@container (min-width: 620px) {
			video {
				aspect-ratio: 16/9;
			}

			.popup {
				inset: unset;
				bottom: -40px;
				left: 40px;
			}
		}

		@container (min-width: 1000px) {
			video {
				height: 100%;
				aspect-ratio: unset;
			}

			.popup {
				bottom: 40px;
				left: -40px;
			}
		}
	}

	.why {
		.card {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}

		img {
			width: 100%;
			height: unset;
			aspect-ratio: 1;
		}
	}
</style>
