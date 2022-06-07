import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public colorMenu: string = 'btn-menu'

  constructor() { }

  ngOnInit(): void {
  }

  menuChangeColor(){
    let lastScrollTop = 0
    // al hacer scroll aumenta el valor de sctop
    let sctop = document.documentElement.scrollTop
    // console.log(sctop)
    let st = window.pageXOffset || document.documentElement.scrollTop


    if (st > lastScrollTop){
      this.colorMenu = 'btn-menu-activo'
    }else if (sctop === 0){
      this.colorMenu = 'btn-menu'
    }

    lastScrollTop = st
  }

    // Detectar scroll
    @HostListener('window:scroll', [])
    onWindowScroll(){
      this.menuChangeColor()
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
