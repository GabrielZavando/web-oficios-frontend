import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscadorComponent } from './buscador/buscador.component';
import { MenuComponent } from './menu/menu.component';
import { SliderComponent } from './slider/slider.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    BuscadorComponent,
    MenuComponent,
    SliderComponent
  ],
  exports: [
    BuscadorComponent,
    MenuComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class ComponentsModule { }
