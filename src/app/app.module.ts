import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


// Componentes
import { AppComponent } from './app.component';

// Modulos propios
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaestrosModule } from './maestros/maestros.module';
import { PagesModule } from './pages/pages.module';
import { PanoramasModule } from './panoramas/panoramas.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		MaestrosModule,
		PagesModule,
		SharedModule,
		PanoramasModule,
		HttpClientModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
