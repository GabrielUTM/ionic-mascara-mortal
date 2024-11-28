import { Component, OnInit } from '@angular/core';
import { items, stats } from 'src/app/interfaces/interfaces';
import { DetalleItemsComponent } from 'src/app/components/detalleitems/detalleitems.component';
import { DetallearmasComponent } from 'src/app/components/detallearmas/detallearmas.component';
import { ModalController } from '@ionic/angular';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  itemsRecientes: items[]=[];
  itemsFiltrados: items[]=[];

  select = "arma";
  //Propiedades del slide
  opcionesSlide = {
    //se mostrara 1 slide y una parte del otro
    slidesPerView: 1.1,
    //Permite una navegación libre (mas rápida)
    freeMode: true
  }

  constructor(
    private modalCtrl: ModalController,
    private servicioPersonajes: PersonajesService,
  ) { }

  filtrar(){
    this.itemsFiltrados = this.itemsRecientes.filter(
      (items) => items.data.tipo === this.select
    );
  }

  async verDetalle(id:string, tipo:string) {
    //Proceso async para adjuntar el modal
    let modal;

    if(tipo === "arma"){
      modal = await this.modalCtrl.create({
        component: DetallearmasComponent,
        componentProps:{id}
      });
    }else if(tipo==="consumible"){
      modal = await this.modalCtrl.create({
        component: DetalleItemsComponent,
        componentProps:{id}
      });
    }
    //Visualización del modal
    if(modal){
      await modal.present();
    }
    
  }

  ngOnInit() {
    this.servicioPersonajes.getDatosItems()
    .subscribe((resp)=> {
      console.log(resp[0].payload.doc)
      resp.forEach(obj => {
        this.itemsRecientes.push({
          id: obj.payload.doc.id,
          data: <stats> obj.payload.doc.data(),
        });
      });
      console.log(this.itemsRecientes);
      this.filtrar();
    });
  }

}
