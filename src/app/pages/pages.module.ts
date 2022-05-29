import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AprendeComponent } from './aprende/aprende.component';
import { InicioComponent } from './inicio/inicio.component';
import { MaestrosComponent } from './maestros/maestros.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PanoramasComponent } from './panoramas/panoramas.component';



@NgModule({
  declarations: [
    AprendeComponent,
    InicioComponent,
    MaestrosComponent,
    NosotrosComponent,
    PanoramasComponent
  ],
  exports: [
    AprendeComponent,
    InicioComponent,
    MaestrosComponent,
    NosotrosComponent,
    PanoramasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }