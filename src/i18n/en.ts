import type { Dictionary } from './types';

export const en: Dictionary = {
	meta: {
		tagline: 'Software Development Student — São Paulo',
		role: 'Software Development Student',
	},
	nav: {
		index: 'Index',
		projects: 'Projects',
		about: 'About',
		github: 'GitHub',
	},
	common: {
		github: 'GitHub',
		linkedin: 'LinkedIn',
		email: 'Email',
		backToTop: 'Back to top',
		footerCtaLabel: 'Get in touch —',
		footerCta: 'Let’s talk.',
		goToRepo: 'GitHub →',
		ariaPrimaryNav: 'Primary',
		ariaHome: 'home',
		ariaLanguageSwitcher: 'Change language',
		ariaThemeLight: 'Switch to light theme',
		ariaThemeDark: 'Switch to dark theme',
	},
	home: {
		title: 'Index',
		description: 'software development student interested in cloud, Linux and open source.',
		name: 'Matheus Coletti.',
		role: 'Software Development Student',
		focus: 'cloud • linux • open source',
		intro: 'I build software while learning how the systems behind it work.',
		archive: 'Personal archive —',
		worksTitle: 'Selected projects',
		worksTag: 'Open source',
		viewAll: 'View all projects →',
		stackTitle: 'Stack',
		stackTag: 'What I work and study with',
		stack: [
			{ title: 'Languages', items: 'JavaScript / TypeScript / Python / Java / C#' },
			{ title: 'Web', items: 'Astro / HTML / CSS / SCSS' },
			{ title: 'Infrastructure', items: 'Linux / Google Cloud / Docker / Git' },
		],
	},
	projects: {
		title: 'Projects',
		description:
			'A running index of the tools Matheus Coletti builds — Android, Linux and web projects, all open source.',
		kicker: (total) => `Index / Projects — ${total} entries`,
		pageTitle: 'Projects.',
		lead: 'A running index of the tools I build in my spare time. No case studies — every entry links straight to the source.',
	},
	about: {
		title: 'About',
		description:
			'software development student in São Paulo, interested in Linux, cloud and open source.',
		kicker: 'Index / About',
		pageTitle: 'About.',
		lead: 'Software development student from São Paulo — I build small tools and study how the systems behind them run.',
		bio: [
			'I’m a software development student in São Paulo. I started with web development in school — HTML, CSS and a bit of JavaScript, building pages for school projects. That led me to a technical course in systems development at ETEC, and later to a web development course at IOS, where I learned to put together a small web application end to end.',
			'Linux came next. What started as a way to make an old laptop faster turned into real curiosity about how a computer works — processes, the kernel, Wayland, networking. Linux has been my daily driver since then, and it’s the thing I’ve learned the most from.',
			'Most of my projects come from problems I actually ran into. I wrote an Android web server that exposes a Sony camera’s filesystem over HTTP, because getting the photos off the camera was painful. I built a low-latency auto-clicker for Wayland, because the tools I found didn’t work well. And a coloured flash in the browser, just to see if the camera API could do it.',
			'Right now I’m studying cloud infrastructure — Linux, networking, Docker and Google Cloud — and how services move from a laptop to something that actually runs. Outside of code, I like photography and design; both are about composition and attention to detail, which is also how I try to think about interfaces.',
		],
		portraitCaption: 'Portrait — study in light, 2025',
		indexCard: 'Index card',
		indexCardTag: 'Biographical notes',
		facts: [
			{ key: 'Location', value: 'São Paulo — SP, Brazil' },
			{ key: 'Education', value: 'Systems Development — ETEC · Web Development — IOS' },
			{ key: 'Environment', value: 'Linux (Wayland) as a daily driver' },
			{ key: 'Currently', value: 'Learning cloud infrastructure — networking, Docker, GCP' },
			{
				key: 'Interests',
				value: 'Linux · Cloud · Open Source · Infrastructure · Photography',
			},
		],
	},
};
