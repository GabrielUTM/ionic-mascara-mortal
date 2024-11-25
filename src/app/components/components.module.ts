import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importar librería para que los componentes reconozcan las etiquetas de ionic
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[HeaderComponent]
})
export class ComponentsModule { }
