import { defaultLocale, locales, type Locale } from './locales';
import type { Dictionary } from './types';
import { en } from './en';
import { pt } from './pt';

export { defaultLocale, locales, type Locale };
export type { Dictionary, Fact, StackItem } from './types';

export const dictionaries: Record<Locale, Dictionary> = { en, pt };

export function getDict(locale: Locale): Dictionary {
	return dictionaries[locale] ?? dictionaries[defaultLocale];
}

export function stripLocale(pathname: string): { lang: Locale; path: string } | null {
	const base = (import.meta.env.BASE_URL ?? '').replace(/\/?$/, '/');
	if (pathname.startsWith(base)) {
		pathname = pathname.slice(base.length);
	}
	const home = /^\/(en|pt)\/?$/.exec(pathname);
	if (home) return { lang: home[1] as Locale, path: '/' };
	const page = /^\/([^/]+)\/(en|pt)\/?$/.exec(pathname);
	if (page) return { lang: page[2] as Locale, path: `/${page[1]}` };
	return null;
}

export function localizedPath(path: string, lang: Locale): string {
	const base = (import.meta.env.BASE_URL ?? '').replace(/\/?$/, '/');
	if (path === '/') return `${base}${lang}`;
	return `${base}${path.replace(/^\//, '')}/${lang}`;
}

export function getLangFromPath(pathname: string): Locale {
	return stripLocale(pathname)?.lang ?? defaultLocale;
}

export function getStaticLangPaths() {
	return locales.map((lang) => ({ params: { lang } }));
}

export function getBrowserLocale(): Locale {
	const nav = navigator.language || (navigator as any).userLanguage;
	if (!nav) return defaultLocale;
	const lower = nav.toLowerCase();
	for (const l of locales) {
		if (lower.startsWith(l)) return l;
	}
	return defaultLocale;
}
