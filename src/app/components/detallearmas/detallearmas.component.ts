import { Component, OnInit, Input } from '@angular/core';
import { stats } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-detallearmas',
  templateUrl: './detallearmas.component.html',
  styleUrls: ['./detallearmas.component.scss'],
})
export class DetallearmasComponent  implements OnInit {
  @Input() id:any;
  detalleArma = {} as stats;

   constructor(
    private modalCrtl: ModalController,
    private detalleArmas: PersonajesService
  ) { }

  regresar() {
    this.modalCrtl.dismiss();
  }
  ngOnInit() {
    this.detalleArmas.getDetalleItem(this.id)
    .subscribe((respuesta)=> {
      console.log("Detalle de Arma: ", respuesta)
      this.detalleArma = <stats>respuesta;
    })
  }


}
