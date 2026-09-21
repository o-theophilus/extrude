<script>
	import { Icon } from '$lib/macro';

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

<div class="orientation grid_container">
	<div class="steps">
		<div class="line"></div>
	</div>

	<div class="grid_4 gap_16">
		{#each steps as x, i}
			<div class="card" data-step={String(i + 1).padStart(2, '0')}>
				<div class="block bg_6 brad_16 outline padding_24">
					<div class="icon left bg_4 fc_2">
						<Icon icon={x.icon} size="24" />
					</div>
					<h4 class="margin_16">{x.title}</h4>
					<p class="margin_16">{x.text}</p>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.orientation {
		--gap: 32px;
		--width: 68px;

		display: flex;
		gap: var(--gap);

		.steps {
			display: flex;
			justify-content: center;
			align-items: center;
			width: var(--width);
			flex-shrink: 0;

			.line {
				width: 2px;
				height: 100%;
				background-color: var(--ol);
			}
		}

		@container (min-width: 580px) {
			flex-direction: column;

			.steps {
				width: 100%;
				height: var(--width);

				.line {
					height: 2px;
					width: 100%;
				}
			}
		}
	}

	.card {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		&::before {
			content: attr(data-step);

			display: flex;
			align-items: center;
			justify-content: center;

			border-radius: 40%;
			width: var(--width);
			height: var(--width);

			background-color: var(--bg2);
			font-size: 1.2rem;
			font-weight: 800;
			outline: 1px solid var(--ol);
			outline-offset: -1px;
			color: var(--ft1);

			position: absolute;
			right: calc(100% + var(--gap));
			@container (min-width: 580px) {
				right: unset;
				bottom: calc(100% + var(--gap));
			}
		}
	}

	.block {
		height: 100%;
	}
</style>
