import { Component, OnInit } from '@angular/core';
import { items, atr } from 'src/app/interfaces/interfaces';
import { DetalleItemsComponent } from 'src/app/components/detalleitems/detalleitems.component';
import { ModalController } from '@ionic/angular';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  itemsRecientes: items[]=[];

  //Propiedades del slide
  opcionesSlide = {
    //se mostrara 1 slide y una parte del otro
    slidesPerView: 1.1,
    //Permite una navegación libre (mas rápida)
    freeMode: true
  }



  constructor(
    private modalCtrl: ModalController,
    private servicioPersonajes: PersonajesService
  ) { }

  async verDetalle(id:string) {
    //Proceso async para adjuntar el modal
    const modal = await this.modalCtrl.create({
      component: DetalleItemsComponent,
      componentProps:{id}
    });

    //Visualización del modal
    modal.present();
  }

  ngOnInit() {
    this.servicioPersonajes.getDatosItems()
    .subscribe((resp)=> {
      console.log(resp[0].payload.doc)
      resp.forEach(obj => {
        this.itemsRecientes.push({
          id: obj.payload.doc.id,
          data: <atr> obj.payload.doc.data(),
        });
      });
    });
  }

}
