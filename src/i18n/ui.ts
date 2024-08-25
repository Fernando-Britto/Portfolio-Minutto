// export const LANGUAGES = {
//     en: 'English',
//     es: 'Español',
//   };
  
//   export const defaultLang = 'en';
  
//   export const ui = {
//     en: {
//       'nav.home': 'Home',
//       'nav.about': 'About',
//       'nav.twitter': 'Twitter',
//     },
//     es: {
//       'nav.home': 'Accueil',
//       'nav.about': 'À propos',
//     },
//   } as const;


  export const LANGUAGES: Record<
	string,
	{ code: string; name: string;}
> = {
	en: {
		code: 'en',
		name: 'English',
		
	},
	es: {
		code: 'es',
		name: 'Español',
	},
};

export const defaultLang = 'en';
export const showDefaultLang = false;

export const ui = {
	es: {
		'nav.inicio': 'Inicio',
		'nav.vota': 'Vota',
		'nav.info': 'Información',
		'nav.archivo': 'Archivo',
		'nav.legal': 'Aviso Legal',
		'nav.privacidad': 'Privacidad',
		'nav.cookies': 'Cookies',
	},
	en: {
		'nav.inicio': 'Home',
		'nav.vota': 'Vote',
		'nav.info': 'Information',
		'nav.archivo': 'Archive',
		'nav.legal': 'Legal Notice',
		'nav.privacidad': 'Privacy',
		'nav.cookies': 'Cookies',
	},
} as const;

export const routes = {
	es: {
		vota: 'vota',
		info: 'info',
		archivo: 'archivo',
		'aviso-legal': 'aviso-legal',
		privacidad: 'privacidad',
		cookies: 'cookies',
	},
	en: {
		vota: 'vote',
		info: 'information',
		archivo: 'archive',
		'aviso-legal': 'legal-notice',
		privacidad: 'privacy',
		cookies: 'cookies',
	},
};