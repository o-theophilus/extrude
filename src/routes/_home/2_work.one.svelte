<script>
	import { fade } from 'svelte/transition';

	let { one } = $props();

	let active = $state(one.imgs[0]);
</script>

<div class="card brad_16 dark">
	{#key active}
		<img src="image/{active}" alt={one.title} in:fade />
	{/key}
	<div class="detail padding_24">
		<h5>{one.title}</h5>
		<div class="hidden">
			<div>
				<p>{one.text}</p>

				<div class="carousel">
					{#each one.imgs as img}
						<button
							class="outline"
							class:active={active == img}
							onclick={() => {
								active = img;
							}}>.</button
						>
					{/each}
				</div>
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
		/* height: 100%; */
	}

	.detail {
		position: absolute;
		bottom: 0;

		background-color: rgba(0, 0, 0, 0.6);
	}

	.carousel {
		display: flex;
		gap: 4px;
		button {
			all: unset;
			cursor: pointer;

			--size: 16px;
			width: var(--size);
			height: var(--size);
			background-color: var(--overlay);

			border-radius: 8px;

			font-size: 0;

			transition: background-color 0.2s ease-in-out;

			&.active {
				background-color: var(--cl1);
			}
			&:hover {
				background-color: var(--cl1_);
			}
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
		font-size: 10px;
	}
</style>
