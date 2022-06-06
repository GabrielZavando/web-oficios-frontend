import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public headerActivo: boolean = false
  public colorLogo: string = '#fff'

  constructor() { }

  ngOnInit(): void {
  }

  headerChangeColor(){
    let lastScrollTop = 0
    // al hacer scroll aumenta el valor de sctop
    let sctop = document.documentElement.scrollTop
    // console.log(sctop)
    let st = window.pageXOffset || document.documentElement.scrollTop


    if (st > lastScrollTop){
      return 'Header-activo'
    }else if (sctop === 0){
      return 'Header'
    }

    lastScrollTop = st
    return 'Header'
  }

  // Detectar scroll
  @HostListener('window:scroll', [])
    onWindowScroll(){
      this.headerChangeColor()
    }

}
