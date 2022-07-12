import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanoramasComponent } from './panoramas.component';
import { PanoramaComponent } from './panorama/panorama.component';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'lista',
				component: PanoramasComponent
			},
			{
				path: ':slug',
				component: PanoramaComponent
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
export class PanoramasRoutingModule { }
