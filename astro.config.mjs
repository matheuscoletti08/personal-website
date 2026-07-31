// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	i18n: {
		defaultLocale: 'pt',
		locales: ['en', 'pt'],
		routing: {
			prefixDefaultLocale: true,
			redirectToDefaultLocale: false,
		},
	},
	redirects: {
		'/': '/pt',
		'/projects': '/pt/projects',
		'/about': '/pt/about',
	},
});
