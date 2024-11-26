import { Component, OnInit } from '@angular/core';
import { MenuElements } from '../../interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {

  elementos: MenuElements[] = [
    {
      icono: "home-outline",
      nombre: "inicio",
      ruta: "/inicio"
    },
    {
      icono: "id-card-outline",
      nombre: "personajes",
      ruta: "/personajes"
    },
  ]
  constructor() { }

  ngOnInit() {}

}
