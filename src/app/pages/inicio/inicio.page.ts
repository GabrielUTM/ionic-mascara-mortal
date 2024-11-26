import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from 'src/app/components/detalle/detalle.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  //Propiedades del slide
  opcionesSlide = {
    //se mostrara 1 slide y una parte del otro
    slidesPerView: 1.1,
    //Permite una navegación libre (mas rápida)
    freeMode: true
  }

  constructor(
    private modalCtrl:ModalController
  ) { }

  async verDetalle(){
    //Proceso async para adjuntar el modal
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      //componentProps:{id}
    });

    //Visualización del modal
    modal.present();
  }

  ngOnInit() {
  }

}
