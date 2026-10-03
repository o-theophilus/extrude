<script>
	import { RoundButton } from '$lib/button';
	import { module } from '$lib/store.svelte.js';
	import { backInOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';
</script>

{#if module.module}
	<section>
		<div class="block" transition:scale|local={{ delay: 0, duration: 200, easing: backInOut }}>
			<div class="close">
				<RoundButton
					icon="x"
					onclick={() => {
						module.close();
					}}
				></RoundButton>
			</div>
			<div class="content">
				<svelte:component this={module.module} />
			</div>
		</div>
	</section>
{/if}

<style>
	section {
		--pad: 64px;

		position: fixed;
		inset: 0;
		z-index: 1;

		display: flex;
		justify-content: center;
		align-items: center;

		padding: 0 24px !important;
		background-color: var(--overlay);

		.block {
			position: relative;
		}
	}

	.close {
		position: absolute;
		--pos: -20px;
		top: var(--pos);
		right: var(--pos);

		--button-color: white;
		--button-background-color_: red;
		--button-background-color-hover_: darkred;
		--button-outline-color-hover_: transparent;
	}

	.content {
		background-color: white;
		box-shadow: 0 0 10px 0 var(--input);
		border-radius: 8px;

		max-width: 600px;
		max-height: calc(100vh - var(--pad) * 2);

		overflow-y: auto;
	}
</style>
