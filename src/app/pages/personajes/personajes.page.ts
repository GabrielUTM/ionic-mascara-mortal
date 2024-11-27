import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from 'src/app/components/detalle/detalle.component';
import { PersonajesService } from 'src/app/services/personajes.service';
import { datos,info } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {
  personajesRecientes: datos[]=[];

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
      component: DetalleComponent,
      componentProps:{id}
    });

    //Visualización del modal
    modal.present();
  }

  ngOnInit() {
    this.servicioPersonajes.getDatos()
    .subscribe((resp)=> {
      console.log(resp[0].payload.doc)
      resp.forEach(obj => {
        this.personajesRecientes.push({
          id: obj.payload.doc.id,
          data: <info> obj.payload.doc.data(),
        });
      });
    });
  }
}
