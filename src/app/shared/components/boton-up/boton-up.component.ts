import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-boton-up',
  templateUrl: './boton-up.component.html',
  styleUrls: ['./boton-up.component.scss']
})
export class BotonUpComponent implements OnInit {
	public windowScrolled!: boolean

  constructor(
		@Inject(DOCUMENT) private document: Document
	) { }

	@HostListener('window:scroll', [])

	onWindowScroll(): void{
		if(window.pageYOffset
			 || document.documentElement.scrollTop
			 || this.document.body.scrollTop > 100){
				this.windowScrolled = true
		}else if(this.windowScrolled
						 && window.pageYOffset
						 || document.documentElement.scrollTop
						 || document.body.scrollTop < 10){
							this.windowScrolled = false
						 }
	}

	scrollToTop(): void{
		(function smoothscroll(): void{
			let currentScroll = document.documentElement.scrollTop || document.body.scrollTop

			if(currentScroll > 0){
				window.requestAnimationFrame(smoothscroll)

				window.scrollTo(0, currentScroll - (currentScroll / 8))
			}
		})()
	}

	ngOnInit(): void {
	}
}
