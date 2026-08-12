import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://coletti.is-a.dev',
	integrations: [sitemap()],

	i18n: {
		defaultLocale: 'pt',
		locales: ['en', 'pt'],
		routing: {
			prefixDefaultLocale: true,
			redirectToDefaultLocale: false,
		},
	},
});
