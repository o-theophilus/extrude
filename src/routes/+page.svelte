<script>
	import { Meta } from '$lib/macro';
	import {
		Clients,
		CTA,
		FAQ,
		Gallery,
		Hero,
		How,
		Metrics,
		Model,
		Quote,
		Spec,
		Why,
		Work
	} from './_home';

	let { data } = $props();
</script>

<Meta
	title="Home"
	description="Extrude is a custom 3D printing service. Send us a file, photo, sketch or idea and we'll bring it to life."
/>

<Hero></Hero>
<Work></Work>
<Gallery gallery={data.gallery}></Gallery>
<Metrics></Metrics>
<Clients></Clients>
<Why></Why>
<How></How>
<Spec></Spec>
<Quote></Quote>
<Model></Model>
<FAQ></FAQ>
<CTA></CTA>
