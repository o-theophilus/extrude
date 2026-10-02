import { readdirSync } from 'node:fs';

export const prerender = true;

export const load = () => {
	const gallery = readdirSync('static/gallery')
		.filter((file) => /\.(webp|png|jpe?g|gif|avif|svg)$/i.test(file))
		.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
		.map((file) => ({
			src: `/gallery/${file}`,
			name: file.replace(/\.[^.]+$/, '')
		}));

	return { gallery };
};
