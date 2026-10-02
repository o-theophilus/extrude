<script>
	import { ArrowLeft, ArrowRight, createIcons } from 'lucide';
	import { onMount } from 'svelte';

	onMount(() => {
		createIcons({
			icons: {
				ArrowLeft,
				ArrowRight
			},
			attrs: {
				'stroke-width': 2.5
			},
			nameAttr: 'icon'
		});
	});

	let scroller = $state();
	let dragging = $state(false);
	let pointerX = 0;
	let startScroll = 0;
	let atStart = $state(true);
	let atEnd = $state(false);
	let settling = $state(false);
	let settleTimer;

	function offset(el) {
		const box = scroller.getBoundingClientRect();
		const r = el.getBoundingClientRect();
		return r.left + r.width / 2 - (box.left + box.width / 2);
	}

	function updateEdges() {
		const cards = scroller.querySelectorAll('.one');
		if (!cards.length) return;

		const maxScroll = scroller.scrollWidth - scroller.clientWidth;
		atStart = scroller.scrollLeft <= 1 || offset(cards[0]) >= -1;
		atEnd = scroller.scrollLeft >= maxScroll - 1 || offset(cards[cards.length - 1]) <= 1;
	}

	$effect(() => {
		if (!scroller) return;
		updateEdges();
		const ro = new ResizeObserver(updateEdges);
		ro.observe(scroller);
		return () => ro.disconnect();
	});

	function endSettle() {
		clearTimeout(settleTimer);
		scroller.removeEventListener('scrollend', endSettle);
		settling = false;
	}

	function onpointerdown(e) {
		endSettle();
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
		if (!dragging) return;
		dragging = false;
		scroller.releasePointerCapture(e.pointerId);

		const nearest = [...scroller.querySelectorAll('.one')].reduce((a, b) =>
			Math.abs(offset(b)) < Math.abs(offset(a)) ? b : a
		);
		const delta = offset(nearest);
		if (Math.abs(delta) < 1) return;

		settling = true;
		scroller.addEventListener('scrollend', endSettle);
		settleTimer = setTimeout(endSettle, 800);
		scroller.scrollBy({ left: delta, behavior: 'smooth' });
	}

	function scroll(dir) {
		const card = scroller.querySelector('.one');
		const step = card.getBoundingClientRect().width + gap;
		scroller.scrollBy({ left: dir * step, behavior: 'smooth' });
	}

	let { children, no_pad = false, gap = 40 } = $props();
</script>

<div
	class:pad={!no_pad}
	style:--gap="{gap}px"
	class="scroller"
	class:dragging
	class:settling
	bind:this={scroller}
	{onpointerdown}
	{onpointermove}
	{onpointerup}
	onpointercancel={onpointerup}
	onscroll={updateEdges}
>
	{@render children?.()}
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

<style>
	.scroller {
		--size: var(--max-width, 800px);

		display: flex;
		gap: var(--gap);

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
			&.pad {
				padding-left: calc((100vw - var(--size)) / 2);
				padding-right: calc((100vw - var(--size)) / 2);
			}
		}

		&::-webkit-scrollbar {
			display: none;
		}

		&.dragging {
			cursor: grabbing;
			scroll-snap-type: none;
			scroll-behavior: unset;
		}
		&.settling {
			scroll-snap-type: none;
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
		}
	}
</style>
