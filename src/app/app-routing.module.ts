import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { AprendeComponent } from './pages/aprende/aprende.component';


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
    loadChildren: () => import('./maestros/maestros.module')
													.then(m => m.MaestrosModule)
  },
  {
    path: 'aprende',
    component: AprendeComponent,
  },
  {
    path: 'panoramas',
    loadChildren: () => import('./panoramas/panoramas.module')
													.then(m => m.PanoramasModule)
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
