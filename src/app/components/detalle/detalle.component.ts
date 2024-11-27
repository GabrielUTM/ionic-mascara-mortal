import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { info } from 'src/app/interfaces/interfaces';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  @Input() id: any;
  detallePersonaje = {} as info;

  constructor(
    private modalCrtl: ModalController,
    private detalle: PersonajesService
  ) { }

  regresar() {
    this.modalCrtl.dismiss();
  }

  ngOnInit() { 
    this.detalle.getDetalle(this.id)
      .subscribe((respuesta) => {
        console.log('Detalle Personaje', respuesta)
        this.detallePersonaje = <info>respuesta;
      });
  }
}
