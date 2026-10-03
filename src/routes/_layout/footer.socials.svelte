<script>
	import { Icon } from '$lib/macro';

	let platforms = [
		{ name: 'instagram', href: '/' },
		{ name: 'twitter', href: '/' },
		{ name: 'tiktok', href: '/' },
		{ name: 'facebook', href: '/' }
	];
</script>

<div class="block">
	{#each platforms as { name, href }}
		<a {href} target="_blank" rel="noopener noreferrer">
			<Icon icon={name} />
		</a>
	{/each}
</div>

<style>
	.block {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}

	a {
		--size: 48px;
		display: flex;
		justify-content: center;
		align-items: center;

		width: var(--size);
		height: var(--size);
		border-radius: 40%;

		color: var(--ft2);
		fill: currentColor;

		transition: background-color 0.2s ease-in-out;

		&:hover {
			background-color: var(--cl44);
		}
	}
</style>
