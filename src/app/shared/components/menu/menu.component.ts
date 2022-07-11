import { Component, HostListener, OnInit } from '@angular/core';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
	public colorMenu: string = 'btn-menu'
	public mostrarMenu: boolean = false
	public menuNotebook: string = ''
	public breakPoint: any = window.matchMedia("(min-width:1024px)")

	constructor() {
		if(this.breakPoint.matches){
			this.mostrarMenu = true
			this.menuNotebook = 'link-menu-notebook-activo'
		}
	}

	ngOnInit(): void {
	}

	showHidePanelMenu(){
		if(this.breakPoint.matches){
			return
		}
		this.mostrarMenu = !this.mostrarMenu
		if(this.mostrarMenu){
			this.colorMenu = 'btn-menu-activo'
		}else{
			this.colorMenu = 'btn-menu'
		}
	}

	menuChangeColor(){
		let lastScrollTop = 0
		// al hacer scroll aumenta el valor de sctop
		let sctop = document.documentElement.scrollTop
		// console.log(sctop)
		let st = window.pageXOffset || document.documentElement.scrollTop


		if (st > lastScrollTop || this.mostrarMenu && !this.breakPoint.matches){
			this.colorMenu = 'btn-menu-activo'
			this.menuNotebook = 'link-menu-notebook'
		}else if (sctop === 0 ){
			this.colorMenu = 'btn-menu'
			this.menuNotebook = 'link-menu-notebook-activo'
		}

		lastScrollTop = st
	}

		// Detectar scroll
		@HostListener('window:scroll', [])
		onWindowScroll(){
			this.menuChangeColor()
		}
}
