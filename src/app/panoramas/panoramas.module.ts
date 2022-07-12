import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanoramaComponent } from './panorama/panorama.component';
import { PanoramasComponent } from './panoramas.component';
import { PanoramasRoutingModule } from './panoramas-routing.module';



@NgModule({
  declarations: [
		PanoramasComponent,
    PanoramaComponent
  ],
  imports: [
    CommonModule,
		PanoramasRoutingModule
  ]
})
export class PanoramasModule { }
