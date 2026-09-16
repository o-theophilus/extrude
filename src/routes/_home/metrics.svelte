<script>
	import { Icon } from '$lib/macro';
</script>

<div class="grid">
	<img class="outline brad_16" src="/image/home.metrics.jpg" alt="Metrics" />
	<div class="card padding_16 brad_16 outline bg_6 a">
		<div class="icon left bg_4 fc_2">
			<Icon icon="clock" size="24" />
		</div>
		<h4 class="margin_16">Under 10 minutes</h4>
		<p class="margin_16">Average delivery time from dispatch to drop.</p>
	</div>
	<div class="card padding_16 brad_16 outline bg_6 b">
		<div class="icon left bg_4 fc_2">
			<Icon icon="target" size="24" />
		</div>
		<h4 class="margin_16">90.9% accuracy</h4>
		<p class="margin_16">
			Every route calculated. Every drop delivered exactly where it should be.
		</p>
	</div>
	<div class="card padding_16 brad_16 outline bg_6 c">
		<div class="icon left bg_4 fc_2">
			<Icon icon="zap" size="24" />
		</div>
		<h4 class="margin_16">Zero traffic delays</h4>
		<p class="margin_16">Air routes eliminate congestion entirely, no stops, no slowdowns.</p>
	</div>
	<div class="card padding_16 brad_16 outline bg_6 d">
		<div class="icon left bg_4 fc_2">
			<Icon icon="globe" size="24" />
		</div>
		<h4 class="margin_16">Scales with demand</h4>
		<p class="margin_16">
			Built to support thousands of simultaneous deliveries across growing cities.
		</p>
	</div>
</div>

<style>
	.grid {
		margin-top: 40px;
		display: grid;
		gap: 8px;

		img {
			grid-area: i;
		}
		.a {
			grid-area: a;
		}
		.b {
			grid-area: b;
		}
		.c {
			grid-area: c;
		}
		.d {
			grid-area: d;
		}

		grid-template-areas:
			'i i'
			'a b'
			'c d';
		grid-template-columns: repeat(2, 1fr);

		@media screen and (min-width: 580px) {
			gap: 16px;
			grid-template-areas:
				'i i x'
				'i i a'
				'b c d';
			grid-template-columns: repeat(3, 1fr);

			img {
				aspect-ratio: 1;
			}
		}

		@media screen and (min-width: 800px) {
			grid-template-areas:
				'i a b'
				'i c d';
			grid-template-columns: repeat(3, 1fr);
		}

		@media screen and (min-width: 1000px) {
			grid-template-columns: 2fr 1fr 1fr;
		}
	}
</style>
