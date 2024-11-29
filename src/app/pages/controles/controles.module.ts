import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControlesPageRoutingModule } from './controles-routing.module';

import { ControlesPage } from './controles.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControlesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ControlesPage]
})
export class ControlesPageModule {}
