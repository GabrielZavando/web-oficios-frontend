import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscadorComponent } from './buscador/buscador.component';
import { MenuComponent } from './menu/menu.component';
import { SliderComponent } from './slider/slider.component';
import { AppRoutingModule } from '../app-routing.module';
import { BtnTopComponent } from './btn-top/btn-top.component';



@NgModule({
  declarations: [
    BuscadorComponent,
    MenuComponent,
    SliderComponent,
		BtnTopComponent
  ],
  exports: [
    BuscadorComponent,
    MenuComponent,
    SliderComponent,
		BtnTopComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class ComponentsModule { }
