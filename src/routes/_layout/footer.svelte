<script>
	import Contact from './footer.contact.svelte';
	import Socials from './footer.socials.svelte';
	import Logo from './logo.svelte';

	import { module } from '$lib/store.svelte.js';
	import Policy from '../_legal/policy.svelte';
	import Terms from '../_legal/terms.svelte';
</script>

<footer class="bg_5 dark">
	<section>
		<div class="block padding_4">
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
			<div class="copyright padding_2">
				<p class="font_08">&copy 2026 | Extrude. All rights reserved.</p>

				<div class="right">
					<button class="font_08" onclick={() => module.open(Policy)}>Privacy Policy</button>
					•
					<button class="font_08" onclick={() => module.open(Terms)}>Terms of Service</button>
				</div>
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

	.right {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0 8px;
		color: var(--text2);
	}

	button {
		all: unset;
		cursor: pointer;
		text-decoration: underline;

		&:hover {
			color: hsl(0, 0%, 95%);
		}
	}
</style>
