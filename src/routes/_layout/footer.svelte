<script>
	import Contact from './footer.contact.svelte';
	import Nav from './footer.nav.svelte';
	import Socials from './footer.socials.svelte';
	import Logo from './logo.svelte';
</script>

<footer class="bg_5 dark">
	<section>
		<div class="block padding_40">
			<div class="a">
				<Logo></Logo>
				<p class="margin_8">Custom 3D print.</p>
			</div>
			<Contact />
			<Socials />
		</div>
	</section>

	<div class="hr">
		<section>
			<div class="copyright padding_40">
				<p class="font_08">&copy 2026 | Extrude. All rights reserved.</p>
				<Nav />
			</div>
		</section>
	</div>
</footer>

<style>
	.block {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 40px;
	}

	@media screen and (min-width: 600px) {
		footer {
			flex-direction: unset;
		}
	}

	.hr {
		border-top: 1px solid var(--line2);
	}
	.copyright {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 0 16px;
	}
</style>
