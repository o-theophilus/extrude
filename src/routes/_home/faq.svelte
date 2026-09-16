<script>
	import { LinkArrow } from '$lib/button';
	import { faqs } from '../faq/faq';
	import Group from '../faq/group.svelte';

	let ops = $state({ open: null });
</script>

{#each faqs as x}
	{#if x.category == 'Orders & Delivery'}
		<Group bind:ops category={x}></Group>
	{/if}
{/each}

<br />

<LinkArrow href="/">View More</LinkArrow>
