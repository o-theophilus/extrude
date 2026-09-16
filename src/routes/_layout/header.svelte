<script>
	let trim = (name, length) => {
		let temp = name.split(' ')[0];
		return temp.length > length ? `${temp.slice(0, length - 3)}...` : temp;
	};
</script>

<section>
	<div class="block">
		<a href="/">
			<img src="/logo.png" alt="logo" />
			Extrude
		</a>
	</div>
</section>

<style>
	section {
		padding: 16px;
	}

	.block {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 16px;

		min-height: var(--headerHeight);
		max-width: var(--pageWidth);
		width: 100%;
		margin: auto;
		padding: 0 16px;

		border-radius: 100px;
		outline: 1px solid var(--ol);
		background: color-mix(in srgb, var(--bg) 60%, transparent);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);

		@media screen and (min-width: 580px) {
			padding: 0 24px;
		}

	
	}

	a {
		display: flex;
		align-items: center;
		gap: 8px;

		color: var(--ft1);
		fill: var(--cl1);
		font-weight: 800;
		text-decoration: none;
		font-size: 1.2rem;

		transition: color 0.2s ease-in-out;
	}

	img {
		width: 32px;
		height: 32px;
		object-fit: contain;
	}


</style>
