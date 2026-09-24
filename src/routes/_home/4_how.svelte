<script>
	import { RoundButton } from '$lib/button';

	let steps = [
		{
			title: 'Tell us what you need',
			text: 'Send us your 3D file, photo, sketch or simply describe what you have in mind.',
			icon: 'message-circle'
		},
		{
			title: 'Get your quote',
			text: "We'll review the requirements and send you a price and estimated turnaround.",
			icon: 'receipt-text'
		},
		{
			title: 'We print',
			text: 'Once everything is approved, your print goes into production.',
			icon: 'printer'
		},
		{
			title: 'Collect or receive',
			text: 'Pick up your finished print or have it delivered to you.',
			icon: 'package'
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
		const step = card ? card.getBoundingClientRect().width + 40 : scroller.clientWidth;
		scroller.scrollBy({ left: dir * step, behavior: 'smooth' });
	}
</script>

<div class="bg">
	<section>
		<div id="how-it-works" class="padding_5 grid_container">
			<h2 class="max_text">From idea to finished piece.</h2>

			<div
				class="margin_40 scroller"
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
					<div class="one brad_16 outline">
						<div class="block bg_6 padding_24">
							<div class="icon bg_4 fc_2">
								{String(i + 1).padStart(2, '0')}
							</div>
							<h4 class="center margin_16">{x.title}</h4>
							<p class="center margin_8">{x.text}</p>
						</div>

						<img src="image/contact.jpg" alt="" draggable="false" />
					</div>
				{/each}
			</div>

			<div class="arrows row gap_16 center margin_24">
				<RoundButton icon="arrow-left" disabled={atStart} onclick={() => scroll(-1)} />
				<RoundButton icon="arrow-right" disabled={atEnd} onclick={() => scroll(1)} />
			</div>
		</div>
	</section>
</div>

<style>
	.bg {
		background-color: hsl(0, 0%, 5%);
		color: var(--ft2_dark);
	}

	h2 {
		color: var(--ft1_dark);
	}

	.scroller {
		display: flex;
		gap: 40px;

		overflow-x: auto;
		scroll-snap-type: x mandatory;
		scroll-behavior: smooth;
		cursor: grab;
		touch-action: pan-y;
		user-select: none;

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
		--button-width_: 48px;
		--button-height_: 48px;
		--button-outline-color_: var(--ft2_dark);
		--button-color_: var(--ft1_dark);
		--button-color-hover_: var(--ft2_dark);
	}

	.one {
		--size: 400px;

		display: flex;
		flex-direction: column;

		overflow: hidden;
		flex: 0 0 100%;

		@container (min-width: 400px) {
			flex-direction: row;
			aspect-ratio: 2/1;
		}

		@container (min-width: 880px) {
			flex: 0 0 calc(var(--size) * 2);
		}

		scroll-snap-align: center;

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
