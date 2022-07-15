import { Component, Input, OnInit } from '@angular/core';
import { SliderBanner } from '../../../models/slider.banner.model';

@Component({
  selector: 'app-banner-slider',
  templateUrl: './banner-slider.component.html',
  styleUrls: ['./banner-slider.component.scss']
})
export class BannerSliderComponent implements OnInit {
	// Se puede mejorar añadiendo un boton de play y pausa

	@Input() cards: SliderBanner[] = []
	@Input() dots = true
	@Input() flechas = true
	@Input() autoSlide = false
	@Input() slideInterval = 3000

	public selectedIndex: number = 0
  public playOrPauseIcon: string = ''

  constructor() { }

  ngOnInit(): void {
		if(this.autoSlide){
			this.autoSlideBanner()
		}
  }



	autoSlideBanner(): void{
		setInterval(() => {
			this.onNextClick()
		}, this.slideInterval)
	}

	selectCard(index: number): void{
		this.selectedIndex = index;
	}

	onPrevClick(): void{
		if(this.selectedIndex === 0){
			this.selectedIndex = this.cards.length - 1
		}else{
			this.selectedIndex--
		}
	}

	onNextClick(): void{
		if(this.selectedIndex === this.cards.length - 1){
			this.selectedIndex = 0
		}else{
			this.selectedIndex++
		}
	}

}
