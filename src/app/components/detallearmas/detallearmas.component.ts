import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PersonajesService } from 'src/app/services/personajes.service';
import { stats } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-detallearmas',
  templateUrl: './detallearmas.component.html',
  styleUrls: ['./detallearmas.component.scss'],
})

export class DetalleArmasComponent  implements OnInit {
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
    this.detalleArmas.getDetalleArma(this.id)
    .subscribe((respuesta)=> {
      console.log("Detalle de arma: ", respuesta)
      this.detalleArma = <stats>respuesta;
    })
  }

}
