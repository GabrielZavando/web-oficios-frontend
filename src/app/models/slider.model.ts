
export interface SliderItem{
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
