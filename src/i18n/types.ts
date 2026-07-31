import type { Locale } from './locales';

export interface Fact {
	key: string;
	value: string;
}

export interface StackItem {
	title: string;
	items: string;
}

export interface Dictionary {
	meta: {
		tagline: string;
		role: string;
	};
	nav: {
		index: string;
		projects: string;
		about: string;
		github: string;
	};
	common: {
		github: string;
		linkedin: string;
		email: string;
		backToTop: string;
		footerCtaLabel: string;
		footerCta: string;
		goToRepo: string;
		ariaPrimaryNav: string;
		ariaHome: string;
		ariaLanguageSwitcher: string;
		ariaThemeLight: string;
		ariaThemeDark: string;
	};
	home: {
		title: string;
		description: string;
		name: string;
		role: string;
		focus: string;
		intro: string;
		archive: string;
		worksTitle: string;
		worksTag: string;
		viewAll: string;
		stackTitle: string;
		stackTag: string;
		stack: StackItem[];
	};
	projects: {
		title: string;
		description: string;
		kicker: (total: string) => string;
		pageTitle: string;
		lead: string;
	};
	about: {
		title: string;
		description: string;
		kicker: string;
		pageTitle: string;
		lead: string;
		bio: string[];
		portraitCaption: string;
		indexCard: string;
		indexCardTag: string;
		facts: Fact[];
	};
}

export type { Locale };
