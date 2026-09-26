<script>
	import { Button } from '$lib/button';
	import { IG } from '$lib/input';
	import { Form } from '$lib/layout';

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

	const text = $derived(`Hi Extrude, I'd like a quote for a print.

\n\n
What are you looking to print? ${answers.printType}
\n\n
Do you have a 3D file? ${answers.hasFile}
\n\n
How many do you need? ${answers.quantity}
\n\n
When do you need it? ${answers.timeline}

Project details: ${answers.description || '—'}`);
</script>

{#snippet choice(label, options, key)}
	<IG name={label}>
		{#snippet input()}
			<div class="choices">
				{#each options as x}
					<button class:active={answers[key] == x} onclick={() => (answers[key] = x)}>
						{x}
					</button>
				{/each}
			</div>
		{/snippet}
	</IG>
{/snippet}

<Form title="Request a Quote" description="Tell us a little about what you'd like us to print.">
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

	<Button
		--button-width="100%"
		--button-background-color="var(--cl3)"
		--button-background-color-hover="var(--cl3_)"
		--button-color="white"
		--button-outline-color="transparent"
		icon2="arrow-up-right"
		href="https://wa.me/2347077033699?text={text}"
		target="_blank"
	>
		Continue to WhatsApp
	</Button>

	<p class="note">
		Your answers will be added to your WhatsApp message so we can understand your request faster.
	</p>
</Form>

<style>
	.choices {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	button {
		all: unset;
		cursor: pointer;

		padding: 4px 16px;
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

	button:hover {
		color: var(--ft1);
	}

	button.active {
		background-color: var(--cl1);
		outline-color: transparent;
		color: white;
	}

	.note {
		margin-top: 16px;
		font-size: 0.8rem;
	}
</style>
