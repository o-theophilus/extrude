<script>
	import { Icon } from '$lib/macro';
	import { whatsapp } from '$lib/store.svelte.js';
</script>

<div class="contact">
	<a href="https://wa.me/{whatsapp}?text=Hello Meji" target="_blank" class="card">
		<div class="icon">
			<Icon icon="whatsapp" size="24"></Icon>
		</div>
		<div class="label">Chat</div>
		<div class="value">Whatsapp</div>
	</a>
	<a href="tel:+{whatsapp}" class="card">
		<div class="icon">
			<Icon icon="phone" size="24"></Icon>
		</div>
		<div class="label">Call</div>
		<div class="value">+234 707 703 3699</div>
	</a>
	<a href="mailto:admin@meji.ng" class="card">
		<div class="icon">
			<Icon icon="mail" size="24"></Icon>
		</div>
		<div class="label">Email</div>
		<div class="value">theophilus.ogbolu@gmail.com.ng</div>
	</a>
</div>

<style>
	.contact {
		display: flex;
		flex-direction: column;
		gap: 8px;

		&:not(:first-of-type) {
			margin-top: 8px;
		}

		@media screen and (min-width: 380px) {
			flex-direction: row;
		}

		.card {
			display: flex;
			flex-direction: column;
			align-items: center;

			width: 100%;
			background-color: var(--bg3);
			padding: 16px;

			color: var(--ft2);
			text-decoration: none;
			border-radius: 8px;

			transition: background-color 0.2s ease-in-out;

			&:hover {
				background-color: var(--bg2);
			}

			.icon {
				display: flex;
				justify-content: center;
				align-items: center;
				color: var(--ft2);
				fill: currentColor;

				width: 48px;
				aspect-ratio: 1;
				border-radius: 40%;
				background-color: var(--bg1);
			}

			.label {
				margin-top: 8px;
				font-weight: 800;
				font-size: 1.2rem;
				color: var(--ft1);
			}

			.value {
				font-size: 0.8rem;
				text-align: center;
			}
		}
	}
</style>
