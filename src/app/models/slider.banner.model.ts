
export interface SliderBanner{
	id: number;
	titulo?: string;
	subtitulo?: string;
	imagen?: string;
	boton?: {
		link: string;
		texto: string;
	}
	order?: number;
	marginLeft?:number;
}
