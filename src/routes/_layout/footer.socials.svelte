<script>
	import { Icon } from '$lib/macro';
	import { waLink } from '$lib/whatsapp.js';

	// Instagram/TikTok are placeholders — swap in the real profile links.
	let platforms = [
		{ name: 'whatsapp', href: waLink('Hi Extrude, I have a question.') },
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
		gap: 4px;
	}

	a {
		--size: 32px;
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
