import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginadosComponent } from './paginados/paginados.component';
import { MaestroComponent } from './maestro/maestro.component';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'paginados',
				component: PaginadosComponent
			},
			{
				path: ':uid',
				component: MaestroComponent
			},
			{
				path: '**',
				redirectTo: 'paginados'
			}
		]
	}
]



@NgModule({
  imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})
export class MaestrosRoutingModule { }
