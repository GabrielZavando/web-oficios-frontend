import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MaestroComponent } from './maestro/maestro.component';
import { MaestrosRoutingModule } from './maestros-routing.module';
import { MaestrosComponent } from './maestros.component';
import { PaginadosComponent } from './paginados/paginados.component';




@NgModule({
  declarations: [
		MaestrosComponent,
		MaestroComponent,
		PaginadosComponent
	],
  imports: [
    CommonModule,
		MaestrosRoutingModule,
		SharedModule,
  ],
	exports: [
		MaestroComponent,
		PaginadosComponent
	]
})
export class MaestrosModule { }
