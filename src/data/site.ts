export interface SiteConfig {
	name: string;
	fullName: string;
	alternateNames: string[];
	givenName: string;
	additionalName: string;
	familyName: string;
	wordmark: string;
	url: string;
	email: string;
	github: string;
	linkedin: string;
	volume: string;
	year: string;
}

export const site: SiteConfig = {
	name: 'Matheus Coletti',
	fullName: 'Matheus Marques Coletti',
	alternateNames: ['Matheus Coletti', 'Coletti'],
	givenName: 'Matheus',
	additionalName: 'Marques',
	familyName: 'Coletti',
	wordmark: 'Coletti',
	url: 'https://coletti.is-a.dev',
	email: 'matheus.coletti08@gmail.com',
	github: 'https://github.com/matheuscoletti08',
	linkedin: 'https://www.linkedin.com/in/matheuscoletti08',
	volume: 'Vol. 1',
	year: '2026',
};
