import { Location } from '@angular/common';
import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

	public event$
	public colorLogo: string = 'Logo'
  public colorHeader: string = 'Header'
	public logoNegro: string = ''

  constructor(
		private location: Location
	) {

		this.event$=location.onUrlChange((valorUrl) => {
			// Extraigo /maestros/ y almaceno el resto en ruta
			let ruta = valorUrl.slice(10)
			let regex = new RegExp('^[a-z0-9]{10,24}$', 'i')
			// Comparo si coinciden
			if(regex.test(ruta)){
				this.logoNegro = 'Logo-negro'
			}else{
				this.logoNegro = ''
			}
    })
	}

  headerChangeColor(){
    let lastScrollTop = 0
    // al hacer scroll aumenta el valor de sctop
    let sctop = document.documentElement.scrollTop
    // console.log(sctop)
    let st = window.pageXOffset || document.documentElement.scrollTop


    if (st > lastScrollTop){
      this.colorHeader = 'Header-activo'
      this.colorLogo = 'Logo-activo'
    }else if (sctop === 0){
      this.colorHeader = 'Header'
      this.colorLogo = 'Logo'
    }

    lastScrollTop = st
  }

  // Detectar scroll
  @HostListener('window:scroll', [])
    onWindowScroll(){
      this.headerChangeColor()
    }

}
