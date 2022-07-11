import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaestroComponent } from './maestro/maestro.component';
import { PaginadosComponent } from './paginados/paginados.component';
import { MaestrosComponent } from './maestros.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
		MaestrosComponent,
		MaestroComponent,
		PaginadosComponent
	],
  imports: [
    CommonModule,
		AppRoutingModule
  ]
})
export class MaestrosModule { }
