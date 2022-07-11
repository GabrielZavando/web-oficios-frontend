import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanoramaComponent } from './panorama/panorama.component';
import { PanoramasComponent } from './panoramas.component';



@NgModule({
  declarations: [
		PanoramasComponent,
    PanoramaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PanoramasModule { }
