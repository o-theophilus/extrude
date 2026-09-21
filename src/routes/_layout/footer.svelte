<script>
	import { Content } from '$lib/layout';
	import Nav from './footer.nav.svelte';
	import Socials from './footer.socials.svelte';
</script>

<div class="a">
	<Content
		--content-height="100%"
		--content-padding-top="56px"
		--content-padding-bottom="40px"
		--content-background-color="var(--bg)"
	>
		<footer id="footer">
			<div class="left">
				<div class="logo">
					<a href="/">
						<img src="/logo.png" alt="logo" />
						Extrude
					</a>
					<span class="tiny"> Custom 3D printing and physical products. </span>
					<span class="tiny">Lagos, Nigeria</span>
					<a class="email" href="mailto:hello@extrude.ng">hello@extrude.ng</a>
				</div>
				<Socials />
			</div>

			<Nav />
		</footer>

		<div class="copyright tiny">Copyright &copy 2026 | Extrude. All rights reserved.</div>
	</Content>
</div>

<style>
	.a {
		border-top: 1px solid var(--ol);
	}
	footer {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 40px;
	}

	@media screen and (min-width: 600px) {
		footer {
			flex-direction: unset;
		}
	}

	.left {
		 .logo {
			margin-bottom: 16px;
		}

		 a {
			display: flex;
			align-items: center;
			gap: 8px;

			width: fit-content;
			color: var(--ft1);
			fill: var(--cl1);
			font-weight: 800;
			text-decoration: none;

			transition: color 0.2s ease-in-out;
		}

		img {
			width: 32px;
			height: 32px;
			object-fit: contain;
		}
	}

	.tiny {
		display: block;
		font-size: 0.8rem;
		text-align: center;
	}

	.email {
		display: block;
		margin-top: 8px;
		font-size: 0.8rem;
		color: var(--ft2);
		text-decoration: none;

		&:hover {
			color: var(--ft1);
		}
	}

	.copyright {
		border-top: 1px solid var(--ol);
		margin-top: 40px;
		padding-top: 40px;
	}
</style>
