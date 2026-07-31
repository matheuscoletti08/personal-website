import type { Dictionary } from './types';

export const pt: Dictionary = {
	meta: {
		tagline: 'Estudante de Desenvolvimento de Software — São Paulo',
		role: 'Estudante de Desenvolvimento de Software',
	},
	nav: {
		index: 'Índice',
		projects: 'Projetos',
		about: 'Sobre',
		github: 'GitHub',
	},
	common: {
		github: 'GitHub',
		linkedin: 'LinkedIn',
		email: 'E-mail',
		backToTop: 'Voltar ao topo',
		footerCtaLabel: 'Fale comigo —',
		footerCta: 'Vamos conversar.',
		goToRepo: 'GitHub →',
		ariaPrimaryNav: 'Principal',
		ariaHome: 'início',
		ariaLanguageSwitcher: 'Trocar idioma',
		ariaThemeLight: 'Mudar para tema claro',
		ariaThemeDark: 'Mudar para tema escuro',
	},
	home: {
		title: 'Índice',
		description: 'estudante de desenvolvimento de software interessado em cloud, Linux e open source.',
		name: 'Matheus Coletti.',
		role: 'Estudante de Desenvolvimento de Software',
		focus: 'cloud • linux • open source',
		intro: 'Construo software enquanto aprendo como os sistemas por trás dele funcionam.',
		archive: 'Arquivo pessoal —',
		worksTitle: 'Projetos selecionados',
		worksTag: 'Código aberto',
		viewAll: 'Ver todos os projetos →',
		stackTitle: 'Stack',
		stackTag: 'Com o que trabalho e estudo',
		stack: [
			{ title: 'Linguagens', items: 'JavaScript / TypeScript / Python / Java / C#' },
			{ title: 'Web', items: 'Astro / HTML / CSS / SCSS' },
			{ title: 'Infraestrutura', items: 'Linux / Google Cloud / Docker / Git' },
		],
	},
	projects: {
		title: 'Projetos',
		description:
			'Um índice contínuo das ferramentas que Matheus Coletti constrói — projetos para Android, Linux e web, todos de código aberto.',
		kicker: (total) => `Índice / Projetos — ${total} entradas`,
		pageTitle: 'Projetos.',
		lead: 'Um índice contínuo das ferramentas que construo no meu tempo livre. Sem estudos de caso — cada entrada leva direto ao código-fonte.',
	},
	about: {
		title: 'Sobre',
		description:
			'estudante de desenvolvimento de software em São Paulo, interessado em Linux, cloud e open source.',
		kicker: 'Índice / Sobre',
		pageTitle: 'Sobre.',
		lead: 'Estudante de desenvolvimento de software em São Paulo — construo ferramentas pequenas e estudo como os sistemas por trás delas funcionam.',
		bio: [
			'Sou estudante de desenvolvimento de software em São Paulo. Comecei na web, ainda na escola, com HTML, CSS e um pouco de JavaScript, fazendo páginas para projetos escolares. Depois entrei no curso técnico de desenvolvimento de sistemas na ETEC e, mais tarde, no de desenvolvimento web na IOS, onde aprendi a montar uma aplicação web pequena do começo ao fim.',
			'O Linux veio depois. O que começou como uma forma de deixar um notebook velho mais rápido virou curiosidade de verdade sobre como um computador funciona — processos, kernel, Wayland, redes. Linux é meu sistema de uso diário desde então, e é de onde mais aprendo.',
			'A maioria dos meus projetos nasce de problemas que eu mesmo encontrei. Escrevi um servidor web para Android que expõe o sistema de arquivos de uma câmera Sony, porque tirar as fotos da câmera era chato. Construí um auto-clicker de baixa latência para Wayland, porque as ferramentas que encontrei não funcionavam bem. E um flash colorido no navegador, só para ver se a API de câmera fazia isso.',
			'Hoje estou estudando infraestrutura de nuvem — Linux, redes, Docker e Google Cloud — e como um serviço sai do notebook e passa a rodar de verdade. Fora do código, gosto de fotografia e design; os dois são sobre composição e atenção aos detalhes, que é também como tento pensar em interfaces.',
		],
		portraitCaption: 'Retrato — estudo de luz, 2025',
		indexCard: 'Ficha',
		indexCardTag: 'Notas biográficas',
		facts: [
			{ key: 'Localização', value: 'São Paulo — SP, Brasil' },
			{ key: 'Formação', value: 'Desenvolvimento de Sistemas — ETEC · Desenvolvimento Web — IOS' },
			{ key: 'Ambiente', value: 'Linux (Wayland) como sistema de uso diário' },
			{ key: 'Atualmente', value: 'Aprendendo infraestrutura de nuvem — redes, Docker, GCP' },
			{
				key: 'Interesses',
				value: 'Linux · Nuvem · Open Source · Infraestrutura · Fotografia',
			},
		],
	},
};
