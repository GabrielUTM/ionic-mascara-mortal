import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importar librería para que los componentes reconozcan las etiquetas de ionic
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { DetalleComponent } from './detalle/detalle.component';


@NgModule({
  declarations: [HeaderComponent, DetalleComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[HeaderComponent, DetalleComponent]
})
export class ComponentsModule { }
