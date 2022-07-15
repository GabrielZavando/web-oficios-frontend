import { AfterViewInit, Component, Input} from '@angular/core';
import { Usuario } from '../../../models/usuario.model';
import Swiper, { Navigation, Pagination } from 'swiper';

@Component({
  selector: 'app-card-video-slider',
  templateUrl: './card-video-slider.component.html',
  styleUrls: ['./card-video-slider.component.scss']
})
export class CardVideoSliderComponent implements AfterViewInit{
	@Input() DESTACADOS: Usuario[] = []

  constructor() { }

  ngAfterViewInit(): void{
		const mySwipper = new Swiper('.swiper-container', {
			modules: [Navigation, Pagination],
			direction: 'horizontal',
			loop: true,
			slidesPerView: 2,
			spaceBetween: 15,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		})
	}

}


