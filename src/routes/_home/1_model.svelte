<script>
	let progress = $state(0);
</script>

<model-viewer
	onprogress={(e) => {
		progress = e.detail.totalProgress;
	}}
	src="model.glb"
	camera-controls
	tone-mapping="neutral"
	poster="model.webp"
	shadow-intensity="1"
	shadow-softness="1"
	auto-rotate
	camera-orbit="143.6deg 67.31deg 2.719m"
	disable-zoom
	disable-tap
	disable-pan
	interaction-prompt="none"
>
	<div class="loading hide" slot="progress-bar">
		<div class="progress" style:--width="{progress * 100}%"></div>
	</div>

	<button
		class="Hotspot"
		slot="hotspot-1"
		data-position="0.44865892813203834m 0.021920072143556305m -0.20134457292272898m"
		data-normal="-0.00003893124794905616m 0.5569663143310546m -0.8305350824527759m"
		data-visibility-attribute="visible"
	>
		<div class="HotspotAnnotation">one</div>
	</button><button
		class="Hotspot"
		slot="hotspot-2"
		data-position="-0.04644146907564123m 0.029901493899798657m -0.19817487277332696m"
		data-normal="-0.09445607721115819m 0.043808051448051014m -0.9945646807051842m"
		data-visibility-attribute="visible"
	>
		<div class="HotspotAnnotation">two</div>
	</button><button
		class="Hotspot"
		slot="hotspot-3"
		data-position="0.62282186139064m 0.0033483593676277568m 0.1188090250561929m"
		data-normal="-0.0000033816656785032087m -0.248265893158653m 0.968691925372923m"
		data-visibility-attribute="visible"
	>
		<div class="HotspotAnnotation">three</div>
	</button>
</model-viewer>

<style>
	model-viewer {
		position: absolute;

		top: -70%;
		right: 0;
		width: 100%;
		height: 100vw;
		z-index: -1;
		/* background-color: rgba(255, 0, 0, 0.072); */

		@container (min-width: 1000px) {
			top: -50%;
			right: -20%;
			width: 150%;
			height: 200%;
		}
	}

	.loading {
		display: block;
		width: 33%;
		height: 10%;
		max-height: 2%;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate3d(-50%, -50%, 0);
		border-radius: 25px;
		box-shadow:
			0px 3px 10px 3px rgba(0, 0, 0, 0.5),
			0px 0px 5px 1px rgba(0, 0, 0, 0.6);
		border: 1px solid rgba(255, 255, 255, 0.9);
		background-color: rgba(0, 0, 0, 0.5);

		&.hide {
			visibility: hidden;
			transition: visibility 0.3s;
		}

		.progress {
			background-color: rgba(255, 255, 255, 0.9);
			width: var(--width);
			height: 100%;
			border-radius: 25px;
			float: left;
			transition: width 0.3s;
		}
	}

	.Hotspot {
		background: #fff;
		border-radius: 32px;
		border: 0;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
		box-sizing: border-box;
		cursor: pointer;
		height: 24px;
		padding: 8px;
		position: relative;
		transition: opacity 0.3s;
		width: 24px;
	}

	.Hotspot:not([data-visible]) {
		background: transparent;
		border: 4px solid #fff;
		box-shadow: none;
		height: 32px;
		pointer-events: none;
		width: 32px;
	}

	.Hotspot:focus {
		border: 4px solid rgb(0, 128, 200);
		height: 32px;
		outline: none;
		width: 32px;
	}

	.Hotspot > * {
		opacity: 1;
		transform: translateY(-50%);
	}

	.HotspotAnnotation {
		background: #fff;
		border-radius: 4px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
		color: rgba(0, 0, 0, 0.8);
		display: block;
		font-family:
			Futura,
			Helvetica Neue,
			sans-serif;
		font-size: 18px;
		font-weight: 700;
		left: calc(100% + 1em);
		max-width: 128px;
		overflow-wrap: break-word;
		padding: 0.5em 1em;
		position: absolute;
		top: 50%;
		width: max-content;
	}

	.Hotspot:not([data-visible]) > * {
		opacity: 0;
		pointer-events: none;
		transform: translateY(calc(-50% + 4px));
		transition:
			transform 0.3s,
			opacity 0.3s;
	}
</style>
