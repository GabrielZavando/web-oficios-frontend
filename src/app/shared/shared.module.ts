// Modulos nativos
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Componentes
import { BlogBuscadorComponent } from './buscadores/blog-buscador/blog-buscador.component';
import { MaestrosBuscadorComponent } from './buscadores/maestros-buscador/maestros-buscador.component';
import { BotonUpComponent } from './components/boton-up/boton-up.component';
import { MenuComponent } from './components/menu/menu.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BannerSliderComponent } from './sliders/banner-slider/banner-slider.component';
import { CardSliderComponent } from './sliders/card-slider/card-slider.component';
import { CardVideoSliderComponent } from './sliders/card-video-slider/card-video-slider.component';

// Modulos propios

// Modulos plugins
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { SwiperModule } from 'swiper/angular';
import { MasonryLightboxComponent } from './components/masonry-lightbox/masonry-lightbox.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { GoogleMapsModule } from '@angular/google-maps';




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
		NewsletterComponent,
		MasonryLightboxComponent,
		MapaComponent,
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
		BotonUpComponent,
		MasonryLightboxComponent,
		MapaComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule,
		SwiperModule,
		SweetAlert2Module.forRoot(),
		GoogleMapsModule
	]
})
export class SharedModule { }
