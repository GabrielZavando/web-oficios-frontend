import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { AprendeComponent } from './aprende/aprende.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

// Modulos
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AprendeComponent,
    InicioComponent,
    NosotrosComponent,
  ],
  exports: [
    AprendeComponent,
    InicioComponent,
    NosotrosComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
		SharedModule
  ]
})
export class PagesModule { }
