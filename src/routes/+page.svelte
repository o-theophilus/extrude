<script>
	import { Button, LinkArrow } from '$lib/button';
	import { Icon, Meta, ToTop } from '$lib/macro';
	import { module } from '$lib/store.svelte.js';
	import { waLink } from '$lib/whatsapp.js';
	import { FAQ, How, QuotePopup } from './_home';

	const openQuote = () => module.open(QuotePopup);

	import { hero, whatWePrint, whyPrint, materials, capabilities, pricingFactors } from './data.js';
</script>

<Meta
	title="Home"
	description="Extrude is a custom 3D printing service. Send us a file, photo, sketch or idea and we'll bring it to life."
/>

<div class="page_css">
	<section class="hero grid_container margin_80">
		<h1>
			Turn your ideas into <span class="fc_1">something you can hold.</span>
		</h1>

		<div class="top gap_80 margin_40">
			<div class="left">
				<p class="font_14">
					From custom products and prototypes to functional parts and branded pieces, we bring your
					ideas to life through precision 3D printing.
				</p>

				<div class="margin_40">
					<Button
						--button-background-color="var(--cl3)"
						--button-background-color-hover="var(--cl3_)"
						--button-color="white"
						--button-outline-color="transparent"
						icon2="arrow-right"
						onclick={openQuote}
					>
						Request a Quote
					</Button>
				</div>
			</div>

			<div class="right brad_16"></div>
		</div>

		<div class="cards margin_80">
			{#each hero as x, i}
				{#if i > 0}
					<div class="divider"></div>
				{/if}

				<div class="card">
					<div class="icon left bg_4 fc_2">
						<Icon icon={x.icon} size="24" />
					</div>
					<div class="text">
						<h4>{x.title}</h4>
						<p class="margin_16">{x.text}</p>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<div class="bg_1 margin_160">
		<section id="what-we-print">
			<div class="padding_5 grid_container">
				<h2 class="max_text">What can we print for you?</h2>
				<p class="max_text margin_16">
					From useful everyday parts to custom pieces made for your brand, 3D printing makes it
					possible to create exactly what you need.
				</p>

				<div class="grid_3 margin_40">
					{#each whatWePrint as x}
						<div class="bg_6 outline padding_24">
							<div class="icon left bg_4 fc_2">
								<Icon icon={x.icon} size="24" />
							</div>
							<h4 class="margin_16">{x.title}</h4>
							<p class="margin_16">{x.text}</p>
						</div>
					{/each}
				</div>

				<div class="center margin_40">
					<LinkArrow onclick={openQuote}>Request a Quote</LinkArrow>
				</div>
			</div>
		</section>
	</div>

	<div class="bg_1 margin_160">
		<section>
			<div class="padding_5 grid_container">
				<h2 class="max_text center">Make what you need, when you need it.</h2>
				<p class="max_text center margin_16">
					3D printing gives you the freedom to create without committing to expensive tooling or
					large production runs.
				</p>

				<div class="grid_4 gap_a margin_80">
					{#each whyPrint as x}
						<div class="card">
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

	<section>
		<div id="how-it-works" class="margin_160">
			<h6 class="section_title">
				<div class="chevron">
					<Icon icon="logo-shape" size="16" />
				</div>
				How it Works
			</h6>
			<h2 class="center max_text margin_24">From idea to finished piece.</h2>
			<div class="margin_40 grid_container">
				<How />
			</div>

			<div class="center margin_40">
				<LinkArrow onclick={openQuote}>Request a Quote</LinkArrow>
			</div>
		</div>

		<div id="materials" class="margin_160">
			<h2 class="center max_text">The right material for the job.</h2>
			<p class="center max_text margin_16">
				Different projects need different properties. We offer a selection of materials and colours
				to suit the way your print will look and be used.
			</p>

			<div class="grid_3 gap_16 margin_80">
				{#each materials as x}
					<div class="tile bg_6 outline brad_16 padding_24">
						<h4>{x.name}</h4>
						<p class="margin_16">{x.text}</p>
					</div>
				{/each}
			</div>

			<div class="grid_3 gap_16 margin_40">
				{#each capabilities as x}
					<div class="tile bg_6 outline brad_16 padding_24 center">
						<div class="icon bg_4 fc_2">
							<Icon icon={x.icon} size="24" />
						</div>
						<h4 class="margin_16">{x.value}</h4>
						<p class="margin_16 font_08">{x.label}</p>
					</div>
				{/each}
			</div>
		</div>

		<div class="margin_160 grid_container">
			<div class="grid_2_1000 gap_80">
				<div class="design_left">
					<h2>No 3D file? No problem.</h2>
					<p class="margin_24">
						You don't need to know how to model in 3D to get something printed. Send us a photo,
						sketch or description and we'll let you know what can be done.
					</p>

					<ul class="circle-check margin_24">
						<li>Simple 3D modelling</li>
						<li>Model modifications</li>
						<li>Print ready file preparation</li>
						<li>Basic recreation of existing parts</li>
					</ul>

					<div class="margin_24">
						<LinkArrow
							href={waLink(
								"Hi Extrude, I'd like help turning a photo/sketch/idea into a 3D model."
							)}
							blank
						>
							Ask About Modelling
						</LinkArrow>
					</div>
				</div>

				<div class="design_right bg_2 outline brad_16">
					<Icon icon="pencil-ruler" size="64" />
				</div>
			</div>
		</div>

		<div class="margin_160">
			<h2 class="center max_text">Get a quote for your print.</h2>
			<p class="center max_text margin_16">
				Every print is different, so we price each job based on what it actually takes to produce.
			</p>

			<div class="grid_3a gap_a margin_80">
				{#each pricingFactors as x}
					<div class="card">
						<div class="icon left bg_4 fc_2">
							<Icon icon={x.icon} size="24" />
						</div>
						<h4 class="margin_16">{x.title}</h4>
						<p class="margin_16">{x.text}</p>
					</div>
				{/each}
			</div>

			<div class="center margin_40">
				<LinkArrow onclick={openQuote}>Request a Quote</LinkArrow>
				<p class="margin_16 font_08">
					Send us the details and we'll give you a clear price for your specific job.
				</p>
			</div>
		</div>

		<div class="margin_160 grid_container">
			<div class="grid_2_1000 gap_80">
				<div>
					<h2>Built around making things.</h2>
					<p class="margin_24">
						Extrude is a 3D printing service focused on turning ideas, designs and practical needs
						into physical objects.
					</p>
					<p class="margin_16">
						From a single replacement part to a batch of branded pieces, every job is handled with
						attention to detail from preparation through to the finished print.
					</p>
				</div>

				<div class="founder bg_6 outline brad_16 padding_24">
					<div class="icon left bg_4 fc_2">
						<Icon icon="user-round" size="24" />
					</div>
					<div class="margin_16 name">Theophilus Ogbolu</div>
					<div class="title">Founder, Extrude</div>
				</div>
			</div>
		</div>

		<div id="faq" class="margin_160">
			<h2 class="center">Questions? We've got answers.</h2>
			<div class="margin_40">
				<FAQ></FAQ>
			</div>
		</div>

		<div class="margin_160 bg_3 padding_64 center brad_32 outline">
			<div class="eyebrow center">HAVE SOMETHING IN MIND?</div>
			<h2 class="max_text margin_16">Let's make it real.</h2>
			<p class="margin_16 max_text">
				Send us your idea, file, photo or sketch and let's work out what it will take to print it.
			</p>

			<div class="margin_40 row gap_16">
				<Button
					--button-background-color="var(--cl3)"
					--button-background-color-hover="var(--cl3_)"
					--button-color="white"
					--button-outline-color="transparent"
					icon2="arrow-up-right"
					onclick={openQuote}
				>
					Request a Quote
				</Button>
			</div>

			<p class="margin_16 max_text font_08">
				We'll ask a few quick questions to get your enquiry started.
			</p>
		</div>

		<ToTop />
	</section>

	<div class="margin_80"></div>
</div>

<style>
	.hero {
		.top {
			display: flex;
			flex-direction: column;

			@container (min-width: 1000px) {
				flex-direction: row;
			}

			.right,
			.left {
				width: 100%;
			}

			.left {
				max-width: 800px;
			}

			.right {
				background-color: red;
				aspect-ratio: 4/3;
			}
		}

		.cards {
			display: flex;
			flex-direction: column;
			gap: 40px;

			.card {
				display: flex;
				flex-direction: column;
				gap: 24px;
			}

			.divider {
				height: 1px;
				background-color: var(--ol);
			}

			@container (min-width: 330px) {
				.card {
					flex-direction: row;
				}
			}

			@container (min-width: 730px) {
				flex-direction: row;

				.divider {
					height: unset;
					width: 1px;
				}
				.card {
					flex-direction: column;
				}
			}

			@container (min-width: 830px) {
				.card {
					flex-direction: row;
				}
			}
		}
	}

	.section_title {
		display: flex;
		align-items: center;
		gap: 16px;

		width: fit-content;
		margin: auto;
		border-radius: 100px;
		border: 1px solid var(--ol);
		padding: 16px 24px;

		color: var(--ft1);

		.chevron {
			display: flex;
			fill: var(--cl1);
		}
	}

	.eyebrow {
		font-size: 0.8rem;
		font-weight: 800;
		letter-spacing: 0.1em;
		color: var(--cl1);
	}

	.design_right {
		display: flex;
		align-items: center;
		justify-content: center;

		min-height: 240px;
		color: var(--cl1);
	}

	.founder {
		display: flex;
		flex-direction: column;
		align-items: flex-start;

		.name {
			font-weight: 800;
			color: var(--ft1);
			font-size: 1.1rem;
		}

		.title {
			font-size: 0.8rem;
		}
	}

	.design_right {
		display: flex;
		align-items: center;
		justify-content: center;

		min-height: 240px;
		color: var(--cl1);
	}

	.founder {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.name {
		font-weight: 800;
		color: var(--ft1);
		font-size: 1.1rem;
	}
</style>
