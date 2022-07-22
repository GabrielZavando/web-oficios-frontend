// Modulos nativos
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Componentes
import { BlogBuscadorComponent } from './buscadores/blog-buscador/blog-buscador.component';
import { MaestrosBuscadorComponent } from './buscadores/maestros-buscador/maestros-buscador.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BannerSliderComponent } from './sliders/banner-slider/banner-slider.component';
import { CardSliderComponent } from './sliders/card-slider/card-slider.component';
import { CardVideoSliderComponent } from './sliders/card-video-slider/card-video-slider.component';
import { BotonUpComponent } from './components/boton-up/boton-up.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';

// Modulos propios

// Modulos plugins
import { SwiperModule } from 'swiper/angular';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2'



@NgModule({
	declarations: [
		FooterComponent,
		HeaderComponent,
		MaestrosBuscadorComponent,
		BlogBuscadorComponent,
		BannerSliderComponent,
		CardSliderComponent,
		CardVideoSliderComponent,
		MenuComponent,
		BotonUpComponent,
  NewsletterComponent
	],
	exports: [
		FooterComponent,
		HeaderComponent,
		MaestrosBuscadorComponent,
		BlogBuscadorComponent,
		BannerSliderComponent,
		CardSliderComponent,
		CardVideoSliderComponent,
		MenuComponent,
		BotonUpComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule,
		SwiperModule,
		SweetAlert2Module.forRoot()
	]
})
export class SharedModule { }
