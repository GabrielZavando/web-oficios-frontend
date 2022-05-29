import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { SeccionComponent } from './seccion/seccion.component';



@NgModule({
  declarations: [
    CardComponent,
    SeccionComponent
  ],
  exports: [
    CardComponent,
    SeccionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MaestrosModule { }
