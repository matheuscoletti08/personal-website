import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://matheuscoletti.is-a.dev',

	i18n: {
		defaultLocale: 'pt',
		locales: ['en', 'pt'],
		routing: {
			prefixDefaultLocale: true,
			redirectToDefaultLocale: false,
		},
	},
});
