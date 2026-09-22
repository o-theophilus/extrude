<script>
	import { LinkArrow } from '$lib/button';
	import { Icon } from '$lib/macro';
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
			<div class="grid_3 gap_a margin_40">
				<div class="title padding_40 brad_16">
					<h2>What can we print for you?</h2>
					<p class="margin_16">
						From useful everyday parts to custom pieces made for your brand, 3D printing makes it
						possible to create exactly what you need.
					</p>
					<LinkArrow onclick={() => module.open(QuotePopup)}>Request a Quote</LinkArrow>
				</div>

				{#each whatWePrint as x}
					<div>
						<div class="icon left bg_4 fc_2">
							<Icon icon={x.icon} size="24" />
						</div>
						<h4 class="margin_16">{x.title}</h4>
						<p class="margin_16">{x.text}</p>
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
	h4 {
		color: var(--ft1_dark);
	}

	.title {
	background-color: hsl(0, 0%, 5%);
		grid-column: span 2;
	}
</style>
