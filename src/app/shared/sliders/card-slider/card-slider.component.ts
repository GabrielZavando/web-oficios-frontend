import { AfterViewInit, Component, Input} from '@angular/core';
import { Usuario } from '../../../models/usuario.model';
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.scss']
})
export class CardSliderComponent implements AfterViewInit {
	@Input() DESTACADOS: Usuario[] = []

  constructor() { }

	ngAfterViewInit(): void {
		const mySwiper = new Swiper('.swiper-container', {
			modules: [Navigation, Pagination],
			direction: 'horizontal',
			loop: true,
			slidesPerView: 2,
			spaceBetween: 15,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			}
		})
	}



}
