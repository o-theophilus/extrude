<script>
	import { Icon } from '$lib/macro';
	import { whatsapp } from '$lib/store.svelte.js';
</script>

<div class="contact">
	<a href="https://wa.me/{whatsapp}?text=Hello Extrude" target="_blank">
		<div class="icon">
			<Icon icon="whatsapp" size="24"></Icon>
		</div>
		<div>
			<h6>Whatsapp</h6>
			<p>+{whatsapp}</p>
		</div>
	</a>
	<a href="tel:+{whatsapp}">
		<div class="icon">
			<Icon icon="phone" size="24"></Icon>
		</div>
		<div>
			<h6>Call</h6>
			<p>+{whatsapp}</p>
		</div>
	</a>
	<a href="mailto:admin@meji.ng">
		<div class="icon">
			<Icon icon="mail" size="24"></Icon>
		</div>
		<div>
			<h6>Email</h6>
			<p>admin@meji.ng</p>
		</div>
	</a>
	<a href="mailto:admin@meji.ng">
		<div class="icon">
			<Icon icon="mail" size="24"></Icon>
		</div>
		<div>
			<h6>Email</h6>
			<p>admin@meji.ng</p>
		</div>
	</a>
</div>

<style>
	.contact {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 8px;
	}

	a {
		display: flex;
		text-decoration: none;
		border-radius: 8px;
		padding-right: 8px;

		transition: background-color 0.2s ease-in-out;

		&:hover {
			background-color: hsl(0, 0%, 20%);
		}

		color: var(--ft2);
		.icon {
			fill: currentColor;
		}
	}
</style>
