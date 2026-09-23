<script>
	import { LinkArrow } from '$lib/button';
	import { Icon } from '$lib/macro';
	import { module } from '$lib/store.svelte.js';
	import QuotePopup from './quote.popup.svelte';

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
</script>

<div class="bg">
	<section>
		<div id="how-it-works" class="padding_5">
			<h2 class="max_text margin_24">From idea to finished piece.</h2>

			<div class="margin_40 grid_container">
				<div class="scroller">
					{#each steps as x, i}
						<div class="one brad_16 outline">
							<div class="block bg_6 padding_24">
								<div class="count">
									{String(i + 1).padStart(2, '0')}
								</div>
								<div class="icon left bg_4 fc_2">
									<Icon icon={x.icon} size="24" />
								</div>
								<h4 class="margin_16">{x.title}</h4>
								<p class="margin_16">{x.text}</p>
							</div>

							<img src="image/contact.jpg" alt="" />
						</div>
					{/each}
				</div>
			</div>

			<div class="center margin_40">
				<LinkArrow
					onclick={() => {
						module.open(QuotePopup);
					}}>Request a Quote</LinkArrow
				>
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

		::-webkit-scrollbar {
			display: none;
		}
	}

	.one {
		--size: 400px;

		display: flex;
		flex-shrink: 0;
		width: calc(var(--size) * 2);
		aspect-ratio: 2/1;

		overflow: hidden;

		scroll-snap-align: start;

		.block {
			width: 100%;
		}

		img {
			width: 100%;
			aspect-ratio: 1/1;
			object-fit: cover;
		}
	}
</style>
