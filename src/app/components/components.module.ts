import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importar librería para que los componentes reconozcan las etiquetas de ionic
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { DetalleComponent } from './detalle/detalle.component';
import { MenuComponent } from './menu/menu.component';
// Importar librería que permite usar la funcion de routerlink
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, DetalleComponent, MenuComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports:[HeaderComponent, DetalleComponent, MenuComponent]
})
export class ComponentsModule { }
