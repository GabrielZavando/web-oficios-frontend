import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ComponentsModule } from '../components/components.module';
import { BtnTopComponent } from './btn-top/btn-top.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    BtnTopComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
		BtnTopComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class SharedModule { }
