import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { MaestrosComponent } from './pages/maestros/maestros.component';
import { AprendeComponent } from './pages/aprende/aprende.component';
import { PanoramasComponent } from './pages/panoramas/panoramas.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    pathMatch: 'full'
  },
  {
    path: 'nosotros',
    component: NosotrosComponent
  },
  {
    path: 'maestros',
    component: MaestrosComponent
  },
  {
    path: 'aprende',
    component: AprendeComponent
  },
  {
    path: 'panoramas',
    component: PanoramasComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
