<script>
	import { module } from '$lib/store.svelte.js';
	import { ChevronRight, createIcons } from 'lucide';
	import { onMount } from 'svelte';
	import ContactForm from './contact.svelte';

	onMount(() => {
		createIcons({
			icons: {
				ChevronRight
			},
			attrs: {
				'stroke-width': 2.5
			},
			nameAttr: 'icon'
		});
	});

	let { children, hero = false } = $props();
</script>

<button onclick={() => module.open(ContactForm)}>
	{@render children?.()}

	{#if hero}
		<svg icon="chevron-right"></svg>
	{/if}
</button>

<style>
	button {
		all: unset;
		cursor: pointer;

		display: inline-flex;
		align-items: center;
		gap: 8px;

		height: 48px;
		border-radius: 4px;
		padding: 0 16px;

		font-weight: 700;
		background-color: var(--cta);
		color: white;

		transition:
			color 0.2s ease-in-out,
			background-color 0.2s ease-in-out;

		&:hover {
			background-color: var(--cta_);
		}
	}

	@keyframes anim {
		from {
			transform: translateX(8px);
		}
		to {
			transform: translateX(-2px);
		}
	}

	svg {
		transform: translateX(8px);
		animation: anim 0.5s ease-in-out infinite alternate;
	}
</style>
