import { Location } from '@angular/common';
import { Component, HostListener} from '@angular/core';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent{
	public event$
	public colorMenu: string = 'btn-menu'
	public menuCafe: string = ''
	public linkCafe: string = ''
	public mostrarMenu: boolean = false
	public menuNotebook: string = ''
	public breakPoint: any = window.matchMedia("(min-width:1024px)")

	constructor(
		private location: Location
		) {
		this.onBreakPoint()
		this.getUrlChange(location)
	}

	onBreakPoint():void{
		if(this.breakPoint.matches){
			this.mostrarMenu = true
			this.menuNotebook = 'link-menu-notebook'
		}
	}

	getUrlChange(location){
		this.event$ = location.onUrlChange((valorUrl) => {
			// Extraigo /maestros/ y almaceno el resto en ruta
			let ruta = valorUrl.slice(10)
			let regex = new RegExp('^[a-z0-9]{10,24}$', 'i')
			// Comparo si coinciden
			if(regex.test(ruta)){
				this.menuCafe = 'btn-menu-cafe'
				this.linkCafe = 'link-menu-notebook-activo'
			}else{
				this.menuCafe = 'btn-menu'
				this.linkCafe = 'link-menu-notebook'
			}
		})
	}

	showHidePanelMenu(){
		this.menuNotebook = 'link-menu-notebook'
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


		if (st > lastScrollTop || (this.mostrarMenu && !this.breakPoint.matches)){
			this.colorMenu = 'btn-menu-activo'
			this.menuNotebook = 'link-menu-notebook-activo'
		}else if (sctop === 0 ){
			this.colorMenu = 'btn-menu'
			// this.menuNotebook = 'link-menu-notebook'
			this.menuNotebook = this.linkCafe
		}

		lastScrollTop = st
	}

		// Detectar scroll
		@HostListener('window:scroll', [])
		onWindowScroll(){
			this.menuChangeColor()
		}
}
