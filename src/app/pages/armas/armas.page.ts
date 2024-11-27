import { Component, OnInit } from '@angular/core';
import { armas, stats } from 'src/app/interfaces/interfaces';
import { DetalleArmasComponent } from 'src/app/components/detallearmas/detallearmas.component';
import { ModalController } from '@ionic/angular';
import { PersonajesService } from 'src/app/services/personajes.service';
@Component({
  selector: 'app-armas',
  templateUrl: './armas.page.html',
  styleUrls: ['./armas.page.scss'],
})
export class ArmasPage implements OnInit {
  armasRecientes: armas[]=[];

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
      component: DetalleArmasComponent,
      componentProps:{id}
    });

    //Visualización del modal
    modal.present();
  }
  ngOnInit() {
    this.servicioPersonajes.getDatosArmas()
    .subscribe((resp)=> {
      console.log(resp[0].payload.doc)
      resp.forEach(obj => {
        this.armasRecientes.push({
          id: obj.payload.doc.id,
          data: <stats> obj.payload.doc.data(),
        });
      });
    });
  }

}
