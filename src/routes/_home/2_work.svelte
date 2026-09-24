<script>
	import { Button } from '$lib/button';
	import { module } from '$lib/store.svelte.js';
	import QuotePopup from './quote.popup.svelte';

	const whatWePrint = [
		{
			icon: 'shapes',
			title: 'Custom Products',
			text: 'Personalised objects, décor, collectibles and one of a kind pieces.'
		},
		{
			icon: 'award',
			title: 'Business & Branding',
			text: 'Awards, trophies, logo pieces, displays and branded objects.'
		},
		{
			icon: 'box',
			title: 'Prototypes',
			text: 'Bring product concepts to life and test ideas before moving into larger scale production.'
		},
		{
			icon: 'wrench',
			title: 'Functional Parts',
			text: 'Brackets, mounts, enclosures, fixtures and replacement parts made for the job.'
		},
		{
			icon: 'gift',
			title: 'Gifts & Personalised Pieces',
			text: 'Custom gifts and memorable pieces made for special people and occasions.'
		},
		{
			icon: 'printer',
			title: 'Custom Prints',
			text: "Have a model already? Send it over and we'll handle the printing."
		}
	];
</script>

<div class="bg margin_160">
	<section id="what-we-print">
		<div class="padding_5 grid_container">
			<div class="grid_3 gap_8_16 margin_40">
				<div class="title padding_64 brad_16 outline">
					<h2>What can we print for you?</h2>
					<p class="margin_16">
						From useful everyday parts to custom pieces made for your brand, 3D printing makes it
						possible to create exactly what you need.
					</p>

					<div class="margin_24">
						<Button
							--button-background-color="var(--cta)"
							--button-background-color-hover="var(--cta_)"
							--button-color="white"
							--button-outline-color="transparent"
							icon2="arrow-right"
							onclick={() => {
								module.open(QuotePopup);
							}}
						>
							Request a Quote
						</Button>
					</div>
				</div>

				{#each whatWePrint as x}
					<div class="card brad_16">
						<img src="image/contact.jpg" alt="" />
						<div class="detail padding_24">
							<h5>{x.title}</h5>
							<div class="hidden">
								<p>{x.text}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
</div>

<style>
	.bg {
		background-color: #03253d;
		color: var(--ft2_dark);
	}

	h2,
	h5 {
		color: var(--ft1_dark);
	}

	.title {
		grid-column: span 2;
		align-content: center;
	}

	.card {
		position: relative;
		overflow: hidden;
		gap: 0;
		line-height: 0;

		img {
			width: 100%;
			aspect-ratio: 1;
			object-fit: cover;
			width: 100%;
			height: 100%;
		}

		.detail {
			position: absolute;
			bottom: 0;

			background-color: rgba(0, 0, 0, 0.6);
		}

		.hidden {
			display: grid;
			grid-template-rows: 0fr;
			transition: grid-template 0.2s ease-in-out;
			line-height: 0;
			
			p {
				overflow: hidden;
				margin: 0;
				transition: margin 0.2s ease-in-out;
			}
		}

		&:hover {
			.hidden {
				grid-template-rows: 1fr;
				p {
					margin-top: 8px;
				}
			}
		}
	}
</style>
