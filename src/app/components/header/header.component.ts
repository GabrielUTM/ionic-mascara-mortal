import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  // Titulo del header que será recibido de cada pagina
  @Input() titulo:string = ""

  constructor() { }

  ngOnInit() {}

}
