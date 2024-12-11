import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetallenivelesComponent } from 'src/app/components/detalleniveles/detalleniveles.component';

@Component({
  selector: 'app-niveles',
  templateUrl: './niveles.page.html',
  styleUrls: ['./niveles.page.scss'],
})
export class NivelesPage implements OnInit { 
  //Array con los datos de los niveles 
  niveles = [
    {
      id: 1,
      nombre: 'Nivel 1: Pueblo',
      descripcion: 'Adentrate en el pueblo con la primer dificultad del nivel, cada nivel ira aumentanto la dificultad de los zombies',
      imagen: '../../../assets/images/nivel1.jpeg',
      dificultad: 'Fácil',
    },
    {
      id: 2,
      nombre: 'Nivel 2: Las ruinas abandonadas',
      descripcion: 'Explora las ruinas, un nivel con mas dificultad y adentrandote al ultimo nivel donde te espera el jefe final.',
      imagen: '../../../assets/images/Nivel2.jpeg',
      dificultad: 'Media',
    },
    {
      id: 3,
      nombre: 'Nivel 3: Instalaciones Dr. C',
      descripcion: 'Un lugar peligroso lleno de enemigos, este nivel tiene la mayor dificultad donde te espera el malvado Doctor C.',
      imagen: '../../../assets/images/Nivel3.jpeg',
      dificultad: 'Difícil',
    },
  ];
  //Propiedades del slide
  opcionesSlide = {
    //se mostrara 1 slide y una parte del otro
    slidesPerView: 1.1,
    //Permite una navegación libre (mas rápida)
    freeMode: true
  }
  nivelSeleccionado: any = null; //variable para almacenar el nivel seleccionado
  constructor(private modalCtrl: ModalController) { }
  async verDetalle(nivel:any) {
    //Proceso async para adjuntar el modal
    const modal = await this.modalCtrl.create({
      component: DetallenivelesComponent,
      componentProps:{nivel}
    });

    //Visualización del modal
    modal.present();
  }
  
  ngOnInit() {
    
  }
}
