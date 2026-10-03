<script>
	import { Carousel } from '$lib/macro';

	let { gallery } = $props();
</script>

<div class="light bg_6 margin_160 grid_container">
	<section>
		<h2>Made by Extrude</h2>
		<p class="margin_8 font_14 max_text">
			See what we've printed and delivered for our customers, from custom ideas and prototypes to
			functional parts and unique pieces.
		</p>
	</section>

	<Carousel --max-width="600px" no_pad gap={10}>
		{#each gallery as x}
			<div class="one brad_16 outline shadow">
				<img src={x.src} alt={x.name} loading="lazy" draggable="false" />
			</div>
		{/each}
	</Carousel>
</div>

<style>
	.one {
		display: flex;
		flex-direction: column;

		overflow: hidden;
		flex: 0 0 100%;
		aspect-ratio: 1;

		outline-color: var(--line1);

		scroll-snap-align: center;

		@container (min-width: 880px) {
			flex: 0 0 calc(var(--size));
		}

		img {
			width: 100%;
			aspect-ratio: 1/1;
			object-fit: cover;
			pointer-events: none;

			@container (min-width: 400px) {
				height: 100%;
				aspect-ratio: unset;
			}
		}
	}
</style>
