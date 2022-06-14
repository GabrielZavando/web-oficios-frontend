import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ComponentsModule } from '../components/components.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
	declarations: [
		FooterComponent,
		HeaderComponent,
	],
	exports: [
		FooterComponent,
		HeaderComponent,
	],
	imports: [
		CommonModule,
		ComponentsModule,
		ReactiveFormsModule
	]
})
export class SharedModule { }
