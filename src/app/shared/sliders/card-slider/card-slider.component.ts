import { Component, Input} from '@angular/core';
import { Usuario } from '../../../models/usuario.model';
import SwiperCore, { SwiperOptions, Navigation } from 'swiper';

SwiperCore.use([Navigation])

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.scss']
})
export class CardSliderComponent {
	@Input() DESTACADOS: Usuario[] = []

	config: SwiperOptions = {
		slidesPerView: 1,
		spaceBetween: 10,
		navigation: true,
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 25
			},
			1440: {
				slidesPerView: 4,
				spaceBetween: 30
			}
		}
	}

  constructor() { }

}
