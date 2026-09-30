<script>
	import Contact from './footer.contact.svelte';
	import Nav from './footer.nav.svelte';
	import Socials from './footer.socials.svelte';
</script>

<!-- --content-height="100%"
--content-padding-top="56px"
--content-padding-bottom="40px"
--content-background-color="var(--bg)" -->

<div class="section">
	<section>
		<div class="block">
			<footer id="footer">
				<div class="a">
					<div class="logo">
						<img src="/logo.png" alt="logo" />
						Extrude
					</div>
					<span class="tiny"> Custom 3D print. </span>
				</div>
				<Socials />
				<Contact />
			</footer>

			<div class="copyright">
				<p class="font_08">&copy 2026 | Extrude. All rights reserved.</p>
				<Nav />
			</div>
		</div>
	</section>
</div>

<style>
	.section {
		border-top: 1px solid var(--line1);
	}
	.block {
		padding-top: 56px;
		padding-bottom: 40px;
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

	.logo {
		margin-bottom: 16px;

		display: flex;
		align-items: center;
		gap: 8px;

		width: fit-content;
		color: var(--ft1);
		fill: var(--cl1);
		font-weight: 800;
		font-size: 24px;
		text-decoration: none;

		img {
			width: 40px;
			height: 40px;
		}
	}

	.copyright {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0 16px;
		justify-content: space-between;

		border-top: 1px solid var(--line1);
		margin-top: 40px;
		padding-top: 40px;
	}
</style>
