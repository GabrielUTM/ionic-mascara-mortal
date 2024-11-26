import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent  implements OnInit {

  constructor(private modalCrtl: ModalController) { }

  regresar(){
    this.modalCrtl.dismiss();
  }

  ngOnInit() {}

}
