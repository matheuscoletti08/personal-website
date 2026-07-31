import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://matheuscoletti08.github.io',
	base: '/personal-website',

	i18n: {
		defaultLocale: 'pt',
		locales: ['en', 'pt'],
		routing: {
			prefixDefaultLocale: true,
			redirectToDefaultLocale: false,
		},
	},
});
