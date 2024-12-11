import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importar librería para que los componentes reconozcan las etiquetas de ionic
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { DetalleComponent } from './detalle/detalle.component';
import { DetalleItemsComponent } from './detalleitems/detalleitems.component';
import { MenuComponent } from './menu/menu.component';
// Importar librería que permite usar la funcion de routerlink
import { RouterModule } from '@angular/router';
import { DetallearmasComponent } from './detallearmas/detallearmas.component';
import { DetallenivelesComponent } from './detalleniveles/detalleniveles.component';

@NgModule({
  declarations: [HeaderComponent, DetalleComponent, DetallearmasComponent, DetalleItemsComponent, MenuComponent, DetallenivelesComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports:[HeaderComponent, DetalleComponent, DetallearmasComponent ,DetalleItemsComponent, MenuComponent, DetallenivelesComponent]
})
export class ComponentsModule { }
