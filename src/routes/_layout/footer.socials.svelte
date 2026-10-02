<script>
	import { Icon } from '$lib/macro';

	let platforms = [
		{ name: 'instagram', href: '/' },
		{ name: 'tiktok', href: '/' },
		{ name: 'instagram', href: '/' },
		{ name: 'tiktok', href: '/' }
	];
</script>

<div class="line">
	{#each platforms as { name, href }}
		<a {href} target="_blank" rel="noopener noreferrer">
			<Icon icon={name} />
		</a>
	{/each}
</div>

<style>
	.line {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 8px;
	}

	a {
		--size: 48px;
		display: flex;
		justify-content: center;
		align-items: center;

		width: var(--size);
		height: var(--size);
		border-radius: 40%;

		background-color: var(--bg2);
		fill: var(--ft2);
		color: var(--ft2);

		transition: background-color 0.2s ease-in-out;
	}

	a:hover {
		background-color: var(--bg1);
	}
</style>
