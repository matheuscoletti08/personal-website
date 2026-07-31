import type { Locale } from '../i18n/locales';

export interface Project {
	title: string;
	description: Record<Locale, string>;
	technologies: string[];
	year: string;
	repo: string;
}

export const projects: Project[] = [
	{
		title: 'PMCA Filesystem Server',
		description: {
			en: 'An Android web server for Sony cameras that exposes the filesystem over HTTP.',
			pt: 'Um servidor web para Android que expõe o sistema de arquivos de câmeras Sony via HTTP.',
		},
		technologies: ['Java', 'Android', 'HTTP'],
		year: '2026',
		repo: 'https://github.com/matheuscoletti08/pmcaFilesystemServer',
	},
	{
		title: 'Wayclick',
		description: {
			en: 'A minimal, low-latency auto-clicker for Linux and Wayland.',
			pt: 'Um auto-clicker mínimo e de baixa latência para Linux e Wayland.',
		},
		technologies: ['Python', 'evdev', 'uinput'],
		year: '2026',
		repo: 'https://github.com/matheuscoletti08/Wayclick',
	},
	{
		title: 'ColorFlash',
		description: {
			en: 'A coloured front-camera flash for any device, in the browser.',
			pt: 'Um flash colorido de câmera frontal para qualquer aparelho, no navegador.',
		},
		technologies: ['JavaScript', 'HTML', 'CSS'],
		year: '2025',
		repo: 'https://github.com/matheuscoletti08/ColorFlash',
	},
	{
		title: 'Content Team Scheduler',
		description: {
			en: 'A planning tool to organise content schedules and assignments.',
			pt: 'Uma ferramenta de planejamento para organizar agendas e tarefas de conteúdo.',
		},
		technologies: ['JavaScript', 'HTML', 'CSS'],
		year: '2026',
		repo: 'https://github.com/matheuscoletti08/content-team-scheduler',
	},
];
