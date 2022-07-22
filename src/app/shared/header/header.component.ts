import { Location } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	event$

	public colorLogo: string = 'Logo'
  public colorHeader: string = 'Header'
	public Logonegro: boolean = false

  constructor(
		private location: Location,
		private userService: UsuariosService
	) {

		this.event$=location.onUrlChange((val) => {
			this.Logonegro = this.userService.cargado
			console.log(this.Logonegro);
    })
	}

  ngOnInit(): void {

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
