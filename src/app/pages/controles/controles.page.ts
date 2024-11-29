import { Component, OnInit } from '@angular/core';
import { controles, datosControles } from '../../interfaces/interfaces';
import { PersonajesService } from '../../services/personajes.service';

@Component({
  selector: 'app-controles',
  templateUrl: './controles.page.html',
  styleUrls: ['./controles.page.scss'],
})
export class ControlesPage implements OnInit {

  controles: datosControles[] = [];

  constructor(private servicioControles: PersonajesService) { }

  ngOnInit() {
    this.servicioControles.getControls()
      .subscribe((resp) => {
        console.log(resp[0].payload.doc)
        resp.forEach(obj => {
          this.controles.push({
            id: obj.payload.doc.id,
            data: <controles>obj.payload.doc.data(),
          });
        });
      });
  }

}
