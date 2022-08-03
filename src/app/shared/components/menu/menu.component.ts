import { Location } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent{
	public event$
	public btnMenuColor: string = ''
	public menuCafe: string = ''
	public linkCafe: string = ''
	public mostrarMenu: boolean = false
	public linkMenuNotebook: string = ''
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
			this.linkMenuNotebook = this.linkCafe
		}
	}

	getUrlChange(location){
		this.event$ = location.onUrlChange((valorUrl) => {
			// Extraigo /maestros/ y almaceno el resto en ruta
			let ruta = valorUrl.slice(10)
			let regex = new RegExp('^[a-z0-9]{10,24}$', 'i')
			// Comparo si coinciden
			if(regex.test(ruta)){
				this.menuCafe = 'btn-menu-activo'
				this.linkCafe = 'link-menu-notebook-activo'
				this.btnMenuColor = 'btn-menu-activo'
			}else{
				this.menuCafe = 'btn-menu'
				this.linkCafe = 'link-menu-notebook'
				this.btnMenuColor = 'btn-menu'
			}
		})
	}

	showHidePanelMenu(){
		let lastScrollTop = 0
		// al hacer scroll aumenta el valor de sctop
		let sctop = document.documentElement.scrollTop
		// console.log(sctop)
		let st = window.pageXOffset || document.documentElement.scrollTop

		if(this.breakPoint.matches){
			this.mostrarMenu = true
			if(st > lastScrollTop){
				this.linkMenuNotebook = 'link-menu-notebook-activo'
			}else if(sctop === 0){
				this.linkMenuNotebook = 'link-menu-notebook'
			}
			return
		}
		this.mostrarMenu = !this.mostrarMenu

		if(st > lastScrollTop){
			this.btnMenuColor = 'btn-menu-activo'
		}else{
			this.btnMenuColor = this.menuCafe
		}
		lastScrollTop = st
	}

	menuChangeColor(){
		let lastScrollTop = 0
		// al hacer scroll aumenta el valor de sctop
		let sctop = document.documentElement.scrollTop
		// console.log(sctop)
		let st = window.pageXOffset || document.documentElement.scrollTop


		if (st > lastScrollTop){
			this.btnMenuColor = 'btn-menu-activo'
			this.linkMenuNotebook = 'link-menu-notebook-activo'
		}else if (sctop === 0 ){
			if(this.breakPoint.matches){
				this.mostrarMenu = true
				this.linkMenuNotebook = this.linkCafe
			}else{
				this.mostrarMenu = false
			}
			this.btnMenuColor = this.menuCafe
			// this.menuNotebook = 'link-menu-notebook'
			// this.menuNotebook = this.linkCafe
		}

		lastScrollTop = st
	}

		// Detectar scroll
		@HostListener('window:scroll', [])
		onWindowScroll(){
			this.menuChangeColor()
		}
}
