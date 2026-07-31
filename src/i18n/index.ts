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

const localePattern = new RegExp(`^/(${locales.join('|')})(?:/(.*))?$`);

export function stripLocale(pathname: string): { lang: Locale; path: string } | null {
	const match = localePattern.exec(pathname);
	if (!match) return null;
	return { lang: match[1] as Locale, path: match[2] ? `/${match[2]}` : '/' };
}

export function localizedPath(path: string, lang: Locale): string {
	return `/${lang}${path === '/' ? '' : path}`;
}

export function getLangFromPath(pathname: string): Locale {
	return stripLocale(pathname)?.lang ?? defaultLocale;
}

export function getStaticLangPaths() {
	return locales.map((lang) => ({ params: { lang } }));
}
