<script>
	let { one } = $props();
</script>

<div class="card brad_16 dark">
	<img src="gallery/{one.img}" alt={one.title} />
	<div class="detail padding_16">
		<h5>{one.title}</h5>
		<div class="hidden">
			<div>
				<p>{one.text}</p>
			</div>
		</div>
	</div>
</div>

<style>
	.card {
		position: relative;
		overflow: hidden;
		gap: 0;
		line-height: 0;
		height: fit-content;
		align-self: flex-end;

		&:hover {
			.hidden {
				grid-template-rows: 1fr;
				div {
					margin-top: 8px;
				}
			}
		}
	}

	img {
		object-fit: cover;
		width: 100%;
		aspect-ratio: 1;
	}

	.detail {
		position: absolute;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.6);

		@container (min-width: 600px) {
			padding: 24px !important;
		}
	}

	.hidden {
		display: grid;
		grid-template-rows: 0fr;
		transition: grid-template 0.2s ease-in-out;
		line-height: 0;

		div {
			overflow: hidden;
			margin: 0;
			transition: margin 0.2s ease-in-out;
		}
	}

	p {
		line-height: 120%;
	}
</style>
