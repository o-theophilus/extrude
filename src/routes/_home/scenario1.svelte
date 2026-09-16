<script>
	import { onDestroy, onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let list = $state([
		{
			word: 'Convenience',
			title: "Cities don't stop. Neither do we.",
			text: 'Wherever congestion slows things down, Extrude cuts through it, keeping people and businesses moving.',
			photo: '/image/home.hero.1.jpg'
		},
		{
			word: 'Food',
			title: 'Skip the rush. Your food is already there',
			text: 'Order ahead and have your meal delivered to your home or office, right on time, still hot, no delays.',
			photo: '/image/home.hero.2.jpg'
		},
		{
			word: 'Medicine',
			title: 'Urgent meds, right when you need them',
			text: 'From pharmacies to your doorstep in minutes. No long drives, just fast, reliable delivery.',
			photo: '/image/home.hero.3.jpg'
		},
		{
			word: 'Shopping',
			title: 'Last-minute deliveries, handled',
			text: "Forgot something important? Extrude gets it to you fast. Whether it's a package, essentials, or business orders.",
			photo: '/image/home.hero.4.jpg'
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
		}, 10000);
	};

	onMount(() => scroll());
	onDestroy(() => clearTimeout(autoScroll));
</script>

<div class="s1">
	<div class="img">
		{#key n}
			<img transition:fade={{ duration: 1000 }} src={list[n].photo} alt={list[n].word} />
		{/key}
	</div>

	<div class="block">
		{#key n}
			<div class="text" in:fade={{ duration: 2000 }}>
				<h3>{list[n].title}</h3>

				{list[n].text}
			</div>
		{/key}

		<div class="carousel">
			{#each list as x, i}
				<button
					class:active={n == i}
					onclick={() => {
						scroll(i);
					}}
				>
					{x.word}

					<div class="loading">
						<div class="fill"></div>
					</div>
				</button>
			{/each}
		</div>
	</div>
</div>

<style>
	.s1 {
		position: relative;
		border-radius: 16px;
		overflow: hidden;
		z-index: 0;

		line-height: 0;
	}

	.img {
		position: relative;
		aspect-ratio: 3/4;

		img {
			position: absolute;
			inset: 0;
			z-index: -1;

			width: 100%;
			height: 100%;

			object-fit: cover;
		}

		&::before {
			content: '';
			position: absolute;
			inset: 0;

			background:
				radial-gradient(circle at 0% 100%, #00000088 0%, #00000066 50%, #00000000 70%),
				radial-gradient(circle at 0% 100%, #00000088 0%, #00000066 50%, #00000000 70%);
		}
	}

	.block {
		position: absolute;
		bottom: 0;

		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		gap: 32px;
		padding: 32px;
		color: white;

		.text {
			max-width: 380px;

			h3 {
				font-weight: 800;
				font-size: 1.5rem;
				margin-top: 0;
				color: white;
			}
		}
	}

	@media screen and (min-width: 600px) {
		.img {
			aspect-ratio: 5/6;
		}

		.block {
			padding: 64px;

			.text {
				h3 {
					font-size: 3rem;
					line-height: 120%;
				}
			}
		}
	}
	@media screen and (min-width: 800px) {
		.img {
			aspect-ratio: 4/3;
		}
	}
	@media screen and (min-width: 1000px) {
		.img {
			aspect-ratio: 9/6;
		}
	}

	.carousel {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;

		button {
			all: unset;
			cursor: pointer;
			padding: 4px 0;
			color: white;

			border-radius: 8px;

			position: relative;

			transition: background-color 0.2s ease-in-out;

			@media (hover: hover) {
				&:hover {
					background-color: hsla(0, 0%, 100%, 0.2);
				}
			}

			.loading {
				position: absolute;
				bottom: -4px;
				left: 0;
				right: 0;

				border-radius: 3px;
				overflow: hidden;

				background-color: hsla(0, 0%, 95%, 0.5);

				.fill {
					height: 4px;
					width: 0;

					background-color: white;
				}
			}

			&.active {
				.fill {
					transition: width 10s linear;
					width: 100%;
				}
			}
		}
	}
</style>
