<script>
	import {
		ArrowLeft,
		ArrowRight,
		createIcons,
		MessageCircle,
		Package,
		Printer,
		ReceiptText
	} from 'lucide';
	import { onMount } from 'svelte';

	onMount(() => {
		createIcons({
			icons: {
				MessageCircle,
				ReceiptText,
				Printer,
				ArrowLeft,
				ArrowRight,
				Package
			},
			attrs: {
				'stroke-width': 2.5
			},
			nameAttr: 'icon'
		});
	});

	import { Button } from '$lib/button';
	import { module } from '$lib/store.svelte.js';
	import ContactForm from './contact.svelte';

	let steps = [
		{
			icon: 'message-circle',
			title: 'Tell us what you need',
			text: 'Send us your 3D file, photo, sketch or simply describe what you have in mind.',
			img: 'image/how.1.webp'
		},
		{
			icon: 'receipt-text',
			title: 'Get your quote',
			text: "We'll review your requirements and send you a price and estimated turnaround time.",
			img: 'image/how.2.webp'
		},
		{
			icon: 'printer',
			title: 'We print',
			text: 'Once you approve the quote, we prepare your design and put your print into production.',
			img: 'image/how.3.webp'
		},
		{
			icon: 'package',
			title: 'Collect or receive',
			text: 'Pick up your finished print or have it delivered straight to you.',
			img: 'image/how.4.webp'
		}
	];

	let scroller = $state();
	let dragging = $state(false);
	let pointerX = 0;
	let startScroll = 0;
	let atStart = $state(true);
	let atEnd = $state(false);

	function updateEdges() {
		atStart = scroller.scrollLeft <= 1;
		atEnd = scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth - 1;
	}

	$effect(() => {
		if (!scroller) return;
		updateEdges();
		const ro = new ResizeObserver(updateEdges);
		ro.observe(scroller);
		return () => ro.disconnect();
	});

	function onpointerdown(e) {
		dragging = true;
		pointerX = e.clientX;
		startScroll = scroller.scrollLeft;
		scroller.setPointerCapture(e.pointerId);
	}

	function onpointermove(e) {
		if (!dragging) return;
		scroller.scrollLeft = startScroll - (e.clientX - pointerX);
	}

	function onpointerup(e) {
		dragging = false;
		scroller.releasePointerCapture(e.pointerId);
	}

	function onwheel(e) {
		if (Math.abs(e.deltaX) >= Math.abs(e.deltaY)) return;
		e.preventDefault();
		scroller.scrollLeft += e.deltaY;
	}

	function scroll(dir) {
		const card = scroller.querySelector('.one');
		const step = card.getBoundingClientRect().width + 40;
		scroller.scrollBy({ left: dir * step, behavior: 'smooth' });
	}
</script>

<div class="light bg_6 padding_5 grid_container">
	<h2 class="center">From idea to finished piece.</h2>

	<div
		class="scroller"
		class:dragging
		bind:this={scroller}
		{onpointerdown}
		{onpointermove}
		{onpointerup}
		onpointercancel={onpointerup}
		{onwheel}
		onscroll={updateEdges}
	>
		{#each steps as x, i}
			<div class="one brad_16 outline shadow">
				<div class="block bg_7 padding_24">
					<div class="icon bg_4">
						<h4 class="light">
							{i + 1}
						</h4>
					</div>
					<h4 class="center margin_16">{x.title}</h4>
					<p class="center margin_8">{x.text}</p>
				</div>

				<img src={x.img} alt="" draggable="false" />
			</div>
		{/each}
	</div>

	<div class="arrows row gap_16 center">
		<button disabled={atStart} onclick={() => scroll(-1)}>
			<svg class="lucide" icon="arrow-left"></svg>
			.
		</button>
		<button disabled={atEnd} onclick={() => scroll(1)}>
			<svg class="lucide" icon="arrow-right"></svg>
			.
		</button>
	</div>

	<div class="margin_80 center">
		<Button
			--button-background-color="var(--cta)"
			--button-background-color-hover="var(--cta_)"
			--button-color="white"
			--button-outline-color="transparent"
			icon2="arrow-right"
			onclick={() => {
				module.open(ContactForm);
			}}
		>
			Get Started
		</Button>
	</div>
</div>

<style>
	.scroller {
		--size: 800px;

		display: flex;
		gap: 40px;

		overflow-x: auto;
		scroll-snap-type: x mandatory;
		scroll-behavior: smooth;
		cursor: grab;
		touch-action: pan-y;
		user-select: none;

		padding-top: 40px;
		padding-bottom: 24px;

		padding-left: 16px;
		padding-right: 16px;
		@media screen and (min-width: 580px) {
			padding-left: 24px;
			padding-right: 24px;
		}
		@container (min-width: 880px) {
			padding-left: calc((100vw - var(--size)) / 2);
			padding-right: calc((100vw - var(--size)) / 2);
		}

		&::-webkit-scrollbar {
			display: none;
		}

		&.dragging {
			cursor: grabbing;
			scroll-snap-type: none;
			scroll-behavior: unset;
		}
	}

	.arrows {
		--button-outline-color_: var(--line1);
		--button-color_: var(--ft1_dark);
		--button-color-hover_: var(--ft2_dark);

		button {
			all: unset;
			cursor: pointer;

			display: flex;
			align-items: center;
			justify-content: center;

			width: 52px;
			height: 52px;
			border-radius: 50%;
			font-size: 0;
			outline: 1px solid var(--line2);
			color: var(--line2);

			transition: color 0.2s ease-in-out;
			transition: outline-color 0.2s ease-in-out;

			&:hover {
				outline-color: var(--line3);
				color: var(--line3);
			}
			&:disabled {
				opacity: 0.2;
				pointer-events: none;
			}

			/* background-color: red; */
		}
	}

	.one {
		display: flex;
		flex-direction: column;

		overflow: hidden;
		flex: 0 0 100%;

		outline-color: var(--line1);

		scroll-snap-align: center;

		@container (min-width: 400px) {
			flex-direction: row;
			aspect-ratio: 2/1;
		}

		@container (min-width: 880px) {
			flex: 0 0 calc(var(--size));
		}

		.block {
			width: 100%;
			height: 100%;
			align-content: center;
			justify-items: center;
		}

		img {
			width: 100%;
			aspect-ratio: 1/1;
			object-fit: cover;
		}
	}
</style>
