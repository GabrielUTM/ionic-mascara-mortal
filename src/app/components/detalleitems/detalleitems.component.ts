import { Component, OnInit, Input } from '@angular/core';
import { stats } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { PersonajesService } from 'src/app/services/personajes.service';
@Component({
  selector: 'app-detalleitems',
  templateUrl: './detalleitems.component.html',
  styleUrls: ['./detalleitems.component.scss'],
})
export class DetalleItemsComponent  implements OnInit {
  @Input() id:any;
  detalleItem = {} as stats;

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
      console.log("Detalle de Item: ", respuesta)
      this.detalleItem = <stats>respuesta;
    })
  }

}
