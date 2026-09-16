<script>
	import { Icon } from '$lib/macro';
</script>

<div class="popup">
	<div class="horiz">
		<div class="icon">
			<Icon icon="package" size="24" />
		</div>

		<div class="details">
			<div class="a">Urgent meds</div>
			<div class="b font_08">Drop Zone · Yaba</div>
			<div class="c">
				<div class="d font_08">Dispatched</div>
				<div class="e font_08">ETA 3 mins</div>
			</div>
		</div>
	</div>

	<div class="progress">
		<div class="fill"></div>
	</div>
</div>

<style>
	.popup {
		border-radius: 0px 0px 24px 24px;
		outline: 1px solid transparent;
		outline-offset: -1px;

		background-color: rgba(0, 0, 0, 0.6);
		padding: 16px;

		font-size: 0.7rem;
		color: hsl(0, 0%, 60%);

		@container (min-width: 620px) {
			background-color: hsl(0, 0%, 15%);
			outline-color: hsl(0, 0%, 25%);
			box-shadow: 0 0 32px black;
			border-radius: 16px;
			padding: 24px;
		}
	}

	.horiz {
		display: flex;
		align-items: center;
		gap: 16px;

		.icon {
			background-color: hsl(0, 0%, 20%);
			color: hsl(0, 0%, 95%);
		}

		.details {
			display: flex;
			flex-direction: column;
			width: 100%;

			.a {
				font-weight: 600;
				color: hsl(0, 0%, 95%);
			}
			.c {
				display: flex;
				gap: 0 32px;
				flex-wrap: wrap;
				justify-content: space-between;

				.d {
					color: var(--cl1);
					font-weight: 600;
				}
				.e {
					color: hsl(0, 0%, 95%);
				}
			}
		}
	}

	.progress {
		background-color: hsl(0, 0%, 85%);
		border-radius: 8px;
		overflow: hidden;

		margin-top: 16px;

		.fill {
			height: 8px;
			width: 70%;
			background-color: var(--cl3);
		}
	}
</style>
