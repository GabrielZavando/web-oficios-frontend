import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogBuscadorComponent } from './buscadores/blog-buscador/blog-buscador.component';
import { MaestrosBuscadorComponent } from './buscadores/maestros-buscador/maestros-buscador.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BannerSliderComponent } from './sliders/banner-slider/banner-slider.component';
import { CardSliderComponent } from './sliders/card-slider/card-slider.component';
import { CardVideoSliderComponent } from './sliders/card-video-slider/card-video-slider.component';
import { AppRoutingModule } from '../app-routing.module';
import { BotonUpComponent } from './components/boton-up/boton-up.component';



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
		BotonUpComponent
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
		ReactiveFormsModule,
		AppRoutingModule
	]
})
export class SharedModule { }
