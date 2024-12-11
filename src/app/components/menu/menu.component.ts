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
      nombre: "Inicio",
      ruta: "/inicio"
    },
    {
      icono: "id-card-outline",
      nombre: "Personajes",
      ruta: "/personajes"
    },
    {
      icono: "shield",
      nombre: "Items",
      ruta: "/items"
    },
    {
      icono: "game-controller",
      nombre: "Controles",
      ruta: "/controles"
    },
    {
      icono: "speedometer-outline",
      nombre: "Niveles",
      ruta: "/niveles"
    },  

  ]
  constructor() { }

  ngOnInit() {}

}
