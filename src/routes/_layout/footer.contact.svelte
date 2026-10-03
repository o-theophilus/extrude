<script>
	import { Icon } from '$lib/macro';
	import { whatsapp } from '$lib/store.svelte.js';

	import { Mail, MapPin, Phone, createIcons } from 'lucide';
	import { onMount } from 'svelte';

	onMount(() => {
		createIcons({
			icons: {
				Phone,
				Mail,
				MapPin
			},
			attrs: {
				'stroke-width': 2.5
			},
			nameAttr: 'icon'
		});
	});
</script>

<div class="contact">
	<a href="https://wa.me/{whatsapp}?text=Hello Extrude" target="_blank">
		<Icon icon="whatsapp" size="24"></Icon>
		<div>
			<h6>Whatsapp</h6>
			<p>+{whatsapp}</p>
		</div>
	</a>
	<a href="tel:+{whatsapp}">
		<svg icon="phone"></svg>
		<div>
			<h6>Call</h6>
			<p>+{whatsapp}</p>
		</div>
	</a>
	<a href="mailto:admin@meji.ng">
		<svg icon="mail"></svg>
		<div>
			<h6>Email</h6>
			<p>admin@meji.ng</p>
		</div>
	</a>
	<a
		href="https://www.google.com/maps/place/Igando+Bus+Stop/@6.5513295,3.2380606,17z/data=!3m1!4b1!4m5!3m4!1s0x103b8540d0692809:0x4a45a882b29213a8!8m2!3d6.5513242!4d3.2402439"
		target="_blank"
	>
		<svg icon="map-pin"></svg>
		<div>
			<h6>Location</h6>
			<p>Lagos, Nigeria</p>
		</div>
	</a>
</div>

<style>
	.contact {
		display: grid;
		grid-template-columns: 1fr 1fr;
		/* gap: 8px; */
	}

	a {
		display: flex;
		justify-content: flex-start;
		gap: 12px;

		text-decoration: none;
		border-radius: 8px;
		padding: 8px 12px;

		color: var(--ft2);
		fill: currentColor;

		transition: background-color 0.2s ease-in-out;

		&:hover {
			background-color: var(--cl44);
		}
	}

	h6 {
		font-size: 0.8rem;
		line-height: 100%;
	}
</style>
