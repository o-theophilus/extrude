<script>
	import { Note } from '$lib/info';
	let { title, description, error, children } = $props();
</script>

<form onsubmit={(e) => e.preventDefault()} novalidate autocomplete="off">
	<h4 class="page_title">{title}</h4>
	<p class="page_desc">{@html description}</p>

	<Note note={error} status="400" --note-margin-top="16px"></Note>
	{@render children()}
</form>

<style>
	form {
		padding: var(--form-padding, 24px);
	}

	.page_desc {
		font-size: 0.8rem;
		margin-bottom: 16px;
	}
</style>
