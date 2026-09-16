<script>
	let { title, copy } = $props();
</script>

<section>
	<h1>
		{@render title?.()}
	</h1>
	<div class="copy">
		{@render copy?.()}
	</div>
</section>

<style>
	section {
		padding-top: var(--title-padding-top, 80px);
		padding-bottom: var(--title-padding-bottom, 80px);
		text-align: center;
	}

	h1 {
		font-size: 3rem;
		font-weight: 800;
		color: var(--ft1);
		max-width: 600px;
		margin: 24px auto;
		line-height: 110%;
	}

	

	.copy {
		margin: auto;
		font-size: 1.2rem;
		max-width: 600px;
	}
</style>
