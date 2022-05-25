import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CardComponent } from './maestros/card/card.component';
import { SeccionComponent } from './maestros/seccion/seccion.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { MaestrosComponent } from './pages/maestros/maestros.component';
import { AprendeComponent } from './pages/aprende/aprende.component';
import { PanoramasComponent } from './pages/panoramas/panoramas.component';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    InicioComponent,
    CardComponent,
    SeccionComponent,
    BuscadorComponent,
    NosotrosComponent,
    MaestrosComponent,
    AprendeComponent,
    PanoramasComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
