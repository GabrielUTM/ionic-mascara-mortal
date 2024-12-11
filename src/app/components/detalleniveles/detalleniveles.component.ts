import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-detalleniveles',
  templateUrl: './detalleniveles.component.html',
  styleUrls: ['./detalleniveles.component.scss'],
})
export class DetallenivelesComponent  implements OnInit {
  @Input() nivel: any;
  constructor(private modalCrtl: ModalController) { }
  
  regresar() {
    this.modalCrtl.dismiss();
  }
  ngOnInit() {}

}
