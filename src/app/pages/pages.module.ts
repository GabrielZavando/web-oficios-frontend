import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Componentes
import { AprendeComponent } from './aprende/aprende.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

// Modulos
import { AppRoutingModule } from '../app-routing.module';
import { MaestrosModule } from '../maestros/maestros.module';
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
		SharedModule,
		MaestrosModule
  ]
})
export class PagesModule { }
