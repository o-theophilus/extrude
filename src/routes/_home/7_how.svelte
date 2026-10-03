<script>
	import CTA from '$lib/cta.svelte';
	import { Carousel } from '$lib/macro';
	import { createIcons, MessageCircle, Package, Printer, ReceiptText } from 'lucide';
	import { onMount } from 'svelte';

	onMount(() => {
		createIcons({
			icons: {
				MessageCircle,
				ReceiptText,
				Printer,
				Package
			},
			attrs: {
				'stroke-width': 2.5
			},
			nameAttr: 'icon'
		});
	});

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
</script>

<div class="light bg_6 padding_5 grid_container">
	<h2 class="center">From idea to finished piece.</h2>
	<Carousel>
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
	</Carousel>

	<div class="margin_80 center">
		<CTA>Get Started</CTA>
	</div>
</div>

<style>
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
