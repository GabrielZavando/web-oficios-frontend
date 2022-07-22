import { SliderBanner } from '../../app/models/slider.banner.model';


export const SLIDER_BANNER_DATA: SliderBanner[] = [
  {
    id: 1,
    titulo: 'Postula',
    subtitulo: 'Hasta el 7 de Agosto',
    imagen: 'assets/img/banner-1.jpg',
		boton: {
			link: 'https://forms.gle/uReintMcRj2XPoACA',
			texto: 'Postula aquí'
		}
  },
  {
    id: 2,
    titulo: 'Conócenos',
    subtitulo: 'Descubre el proyecto',
    imagen: 'assets/img/banner-2.jpg',
		boton: {
			link: 'https://www.instagram.com/',
			texto: 'ver más'
		}
  },
  {
    id: 3,
    titulo: 'Síguenos',
    subtitulo: 'Visita nuestras redes sociales',
    imagen: 'assets/img/banner-3.jpg',
		boton: {
			link: 'https://www.instagram.com/',
			texto: 'ver más'
		}
  },
  {
    id: 4,
    titulo: 'Panoramas',
    subtitulo: 'Entérate de todo, inspírate y descubre un mundo de oficio y creatividad',
    imagen: 'assets/img/banner-4.jpg',
		// boton: {
		// 	link: 'https://www.instagram.com/',
		// 	texto: 'ver más'
		// }
  }
]
