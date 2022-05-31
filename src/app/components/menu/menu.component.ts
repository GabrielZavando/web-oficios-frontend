import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    // Navegación smooth scroll

  // Nota (se puede mejorar creando un objeto con el menu para luego recorrerlo con un *ngfor en el html)

  goToSection(section: string, boton: any, menu: any){
    document.getElementById(section)
                ?.scrollIntoView({behavior: 'smooth'})

    boton.classList.toggle('is-active')
    menu.classList.toggle('is-active')
  }

}
