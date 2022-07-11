export interface Equipo{
	img: string;
	nombre: string;
	cargo: string;
	links: {
		red1: {
			nombre: string;
			link: string;
		}
		red2?: {
			nombre: string;
			link: string;
		}
		web?: {
			icono: string;
			link: string;
		}
	}
}
