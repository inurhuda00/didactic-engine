import { sveltekit } from '@sveltejs/kit/vite';
import { presetUno, presetWebFonts, transformerDirectives } from 'unocss';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		UnoCSS({
			mode: 'svelte-scoped',
			transformers: [transformerDirectives()],
			presets: [
				presetUno(),
				presetWebFonts({
					provider: 'bunny',
					fonts: {
						sans: 'Roboto',
						inter: [
							{
								name: 'Inter',
								weights: ['400', '700'],
								italic: true,
							},
							{
								name: 'sans-serif',
								provider: 'none',
							},
						],
						mono: ['Fira Code', 'Fira Mono:400,700'],
					},
				}),
			],
		}),
		sveltekit(),
	],
});
