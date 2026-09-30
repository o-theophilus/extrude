<script>
	const clients = [
		{ name: 'Northwind', img: 'northwind.svg' },
		{ name: 'Apex Labs', img: 'apex.svg' },
		{ name: 'Lumen', img: 'lumen.svg' },
		{ name: 'Forge & Co', img: 'forge.svg' },
		{ name: 'Orbit', img: 'orbit.svg' },
		{ name: 'Vertex', img: 'vertex.svg' }
	];
</script>

<div class="margin_80">
	<section>
		<p class="center font_14">Trusted by teams and makers</p>

		<div class="marquee margin_24">
			<div class="track">
				{#each clients as x}
					<img src="/partners/{x.img}" alt={x.name} />
				{/each}
				{#each clients as x}
					<img src="/partners/{x.img}" alt={x.name} />
				{/each}
			</div>
		</div>
	</section>
</div>

<style>
	.marquee {
		--gap: 40px;
		--duration: 30s;

		overflow: hidden;
		mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);

		@container (min-width: 800px) {
			--gap: 96px;
		}
	}

	@keyframes scroll {
		to {
			transform: translateX(-50%);
		}
	}
	.track {
		display: flex;
		width: max-content;
		align-items: center;
		gap: var(--gap);

		animation: scroll var(--duration) linear infinite;
		.marquee:hover & {
			animation-play-state: paused;
		}
	}

	img {
		flex: none;
		height: 36px;
		opacity: 0.6;
		transition: opacity 0.2s ease-in-out;

		&:hover {
			opacity: 1;
		}
	}
</style>
