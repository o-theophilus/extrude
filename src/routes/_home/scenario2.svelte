<script>
	import { onDestroy, onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let list = $state([
		{
			title: "Forgot something important after you've already arrived?",
			text: 'Get everyday items delivered to your home, office, or nearest Extrude zone, right when you need them.',
			photo: '/image/home.scene.1.jpg'
		},
		{
			title: "Lunch can't wait and the traffic isn't moving?",
			text: 'Order from your favorite spots and have your meal delivered fresh and on time.',
			photo: '/image/home.scene.2.jpg'
		},
		{
			title: 'Need medication fast, without the long drive?',
			text: 'Receive prescriptions and health essentials quickly, safely, and without delays.',
			photo: '/image/home.scene.3.jpg'
		},
		{
			title: "Found something you need but don't want the delay?",
			text: 'Shop and get items delivered in minutes, no queues, no waiting.',
			photo: '/image/home.scene.4.jpg'
		}
	]);

	let n = $state(0);

	const scroll = (dir = '') => {
		if (dir == 'left') n -= 1;
		else if (dir == 'right') n += 1;
		else if (typeof dir === 'number') n = dir;

		if (n > list.length - 1) {
			n = 0;
		} else if (n < 0) {
			n = list.length - 1;
		}

		let temp = n;
		if (n == 0) n = 1;
		else n = 0;
		requestAnimationFrame(() => {
			n = temp;
			resetAutoScroll();
		});
	};

	let autoScroll;
	const resetAutoScroll = () => {
		clearTimeout(autoScroll);
		autoScroll = setTimeout(() => {
			scroll('right');
			resetAutoScroll();
		}, 6000);
	};

	onMount(() => {
		scroll();
	});

	onDestroy(() => {
		clearTimeout(autoScroll);
	});
</script>

<div class="card">
	{#key n}
		<img transition:fade={{ duration: 1000 }} src={list[n].photo} alt={list[n].title} />

		<div class="gradient"></div>

		<div class="block" transition:fade={{ duration: 1000 }}>
			<h3>{list[n].title}</h3>

			<button>
				Extrude it
				<div class="a"></div>
				<div class="b"></div>
			</button>

			<div class="text">
				{list[n].text}
			</div>
		</div>
	{/key}

	<div class="carousel">
		{#each list as x, i}
			<button class:active={n == i} onclick={() => scroll(i)}>
				<div class="loading">
					<div class="fill">.</div>
				</div>
			</button>
		{/each}
	</div>
</div>

<style>
	.card {
		position: relative;

		display: flex;
		align-items: center;
		justify-content: center;

		border-radius: 16px;
		overflow: hidden;
		line-height: 0;
		aspect-ratio: 3/4;

		@media screen and (min-width: 580px) {
			.block {
				button {
					font-size: 2.5rem;
				}
				h3 {
					font-size: 2.5rem;
					line-height: 120%;
				}
			}
		}

		@media screen and (min-width: 800px) {
			aspect-ratio: 4/3;
		}

		@media screen and (min-width: 1000px) {
			aspect-ratio: 9/4;
		}
	}

	img {
		position: absolute;
		inset: 0;

		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.gradient {
		position: absolute;
		inset: 0;
		background:
			linear-gradient(0deg, #00000088 0%, #00000000 100%),
			linear-gradient(0deg, #00000088 0%, #00000000 100%);
	}

	.block {
		position: absolute;
		bottom: 62px;
		max-width: 800px;
		padding: 16px;

		text-align: center;
		color: white;

		h3 {
			font-weight: 800;
			font-size: 1.5rem;
			color: white;
		}

		.text {
			margin-top: 32px;
			font-size: 0.8rem;
		}

		button {
			all: unset;
			cursor: pointer;
			display: block;
			position: relative;
			z-index: 0;

			margin: 24px auto;
			padding: 16px 32px;
			font-weight: 800;
			color: white;

			font-size: 1.5rem;

			div {
				position: absolute;
				z-index: -1;
				inset: 0;
				height: 100%;
				background-color: var(--cl3);

				transition: transform 0.2s ease-in-out;

				--dist: 6px;

				&.a {
					transform: rotate(-4deg) translate(var(--dist), var(--dist));
					background-color: var(--cl3_);
				}
				&.b {
					transform: rotate(4deg);
				}
			}

			&:hover {
				div {
					&.a {
						transform: rotate(0deg) translate(var(--dist), var(--dist));
					}
					&.b {
						transform: rotate(0deg);
					}
				}
			}
		}
	}

	.carousel {
		display: flex;
		gap: 8px;

		position: absolute;
		bottom: 16px;

		button {
			all: unset;
			cursor: pointer;
			background-color: hsla(0, 0%, 95%, 0.5);
			width: 8px;
			border-radius: 8px;
			overflow: hidden;

			transition:
				background-color 0.2s ease-in-out,
				width 0.2s ease-in-out;

			&:not(.active):hover {
				background-color: hsla(0, 0%, 95%, 0.6);
			}

			.fill {
				height: 8px;
				width: 0;

				background-color: white;
			}

			&.active {
				width: 32px;
				.fill {
					transition: width 6s linear;
					width: 100%;
				}
			}
		}
	}
</style>
