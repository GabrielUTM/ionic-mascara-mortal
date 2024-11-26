import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    // ruta por defecto al ajecutar la aplicacion
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'personajes',
    loadChildren: () => import('./pages/personajes/personajes.module').then(m => m.PersonajesPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
