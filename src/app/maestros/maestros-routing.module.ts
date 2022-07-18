import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaestroComponent } from './maestro/maestro.component';
import { MaestrosComponent } from './maestros.component';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'lista',
				component: MaestrosComponent
			},
			{
				path: ':uid',
				component: MaestroComponent
			},
			{
				path: '**',
				redirectTo: 'lista'
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
