<script>
	let { mobile } = $props();
</script>

<div class="summary">
	<div class="hide"></div>
	<div class="item">
		<div class="value">&lt;10<span>min</span></div>
		<div class="label">Avg. delivery time</div>
	</div>

	<div class="divider"></div>
	<div class="item">
		<div class="value">90.9<span>%</span></div>
		<div class="label">Drop zone accuracy</div>
	</div>
	<div class="divider"></div>
	<div class="item">
		<div class="value">Zero<span> &nbsp;jams</span></div>
		<div class="label">Traffic delays</div>
	</div>
	<div class="hide"></div>
</div>

<style>
	.summary {
		display: flex;
		gap: 8px;
		justify-content: space-between;
		font-size: 0.7rem;

		.item {
			text-align: center;
			.value {
				font-size: 1.2rem;
				font-weight: 800;
				color: var(--ft1);

				span {
					font-weight: 600;
					color: var(--cl1);
				}
			}

			@container (min-width: 520px) {
				.value {
					font-size: 2rem;
				}
			}
			@container (min-width: 1000px) {
				text-align: left;
			}
		}

		@container (min-width: 1000px) {
			.hide {
				display: none;
			}
		}

		.divider {
			width: 1px;
			background-color: var(--ol);
		}
	}
</style>
