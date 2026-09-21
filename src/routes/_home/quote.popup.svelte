<script>
	import { Button } from '$lib/button';
	import { IG } from '$lib/input';
	import { Icon } from '$lib/macro';
	import { module } from '$lib/store.svelte.js';
	import { waLink } from '$lib/whatsapp.js';

	let printTypes = [
		'Custom product',
		'Business or branded item',
		'Prototype',
		'Functional or replacement part',
		'Gift or personalised item',
		'Something else'
	];
	let fileOptions = ['Yes', 'No', 'Not sure'];
	let quantityOptions = ['1', '2 to 10', '10+', 'Not sure'];
	let timelineOptions = ['As soon as possible', 'Within a week', 'No specific deadline'];

	let answers = $state({
		printType: printTypes[0],
		hasFile: fileOptions[0],
		quantity: quantityOptions[0],
		timeline: timelineOptions[0],
		description: ''
	});

	let fileName = $state('');

	const buildMessage = () => `Hi Extrude, I'd like a quote for a print.

What are you looking to print? ${answers.printType}
Do you have a 3D file? ${answers.hasFile}
How many do you need? ${answers.quantity}
When do you need it? ${answers.timeline}

Project details: ${answers.description || '—'}${
		fileName ? `\n\nI also have a reference file (${fileName}) to share here in the chat.` : ''
	}`;

	const submit = () => {
		window.open(waLink(buildMessage()), '_blank', 'noopener,noreferrer');
		module.close();
	};
</script>

{#snippet choice(label, options, key)}
	<IG name={label}>
		{#snippet input()}
			<div class="choices">
				{#each options as x}
					<button
						type="button"
						class="choice"
						class:active={answers[key] == x}
						onclick={() => (answers[key] = x)}
					>
						{x}
					</button>
				{/each}
			</div>
		{/snippet}
	</IG>
{/snippet}

<div class="popup_head">
	<h4>Request a Quote</h4>
	<p class="margin_16">Tell us a little about what you'd like us to print.</p>
</div>

<div class="popup_body">
	{@render choice('What are you looking to print?', printTypes, 'printType')}
	{@render choice('Do you have a 3D file?', fileOptions, 'hasFile')}
	{@render choice('How many do you need?', quantityOptions, 'quantity')}
	{@render choice('When do you need it?', timelineOptions, 'timeline')}

	<IG
		name="Tell us about your project"
		type="textarea"
		bind:value={answers.description}
		placeholder="Describe what you want us to print..."
	/>

	<IG name="Add a file or photo">
		{#snippet input(id)}
			<label class="file">
				<Icon icon="images" size="16" />
				{fileName || 'Optional. Upload a 3D file, reference image, sketch or photo.'}
				<input
					{id}
					type="file"
					onchange={(e) => (fileName = e.currentTarget.files?.[0]?.name || '')}
				/>
			</label>
		{/snippet}
	</IG>

	<Button
		--button-width="100%"
		--button-background-color="var(--cl3)"
		--button-background-color-hover="var(--cl3_)"
		--button-color="white"
		--button-outline-color="transparent"
		icon2="arrow-up-right"
		onclick={submit}
	>
		Continue to WhatsApp
	</Button>

	<p class="note">
		Your answers will be added to your WhatsApp message so we can understand your request faster.
	</p>
</div>

<style>
	.popup_head {
		padding: 24px 24px 0 24px;
	}
	.popup_body {
		padding: 24px;
		max-height: 70vh;
		overflow-y: auto;
	}

	.choices {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	.choice {
		all: unset;
		cursor: pointer;

		padding: 8px 16px;
		border-radius: 100px;
		font-size: 0.8rem;
		outline: 1px solid var(--ol);
		outline-offset: -1px;
		color: var(--ft2);

		transition:
			background-color 0.2s ease-in-out,
			color 0.2s ease-in-out,
			outline-color 0.2s ease-in-out;
	}

	.choice:hover {
		color: var(--ft1);
	}

	.choice.active {
		background-color: var(--cl1);
		outline-color: transparent;
		color: white;
	}

	.file {
		position: relative;
		display: flex;
		align-items: center;
		gap: 8px;

		width: 100%;
		min-height: 48px;
		padding: 0 16px;
		border-radius: 4px;
		outline: 1px solid var(--input);
		outline-offset: -1px;
		background-color: var(--input);

		font-size: 0.8rem;
		color: var(--ft2);
		cursor: pointer;

		transition: outline-color 0.2s ease-in-out;
	}

	.file:hover {
		outline-color: var(--ft1);
		color: var(--ft1);
	}

	.file input {
		position: absolute;
		inset: 0;
		opacity: 0;
		cursor: pointer;
	}

	.note {
		margin-top: 16px;
		font-size: 0.8rem;
	}
</style>
