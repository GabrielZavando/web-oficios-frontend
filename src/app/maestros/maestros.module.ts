import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaestroComponent } from './maestro/maestro.component';
import { PaginadosComponent } from './paginados/paginados.component';
import { MaestrosComponent } from './maestros.component';
import { MaestrosRoutingModule } from './maestros-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
		MaestrosComponent,
		MaestroComponent,
		PaginadosComponent
	],
  imports: [
    CommonModule,
		MaestrosRoutingModule,
		SharedModule
  ],
	exports: [
		MaestroComponent,
		PaginadosComponent
	]
})
export class MaestrosModule { }
