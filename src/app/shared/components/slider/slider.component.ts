import { Component, Input, OnInit } from '@angular/core';
import { SliderItem } from '../../../models/slider.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  // Propiedades que llegan del componente padre (el que usa el slider)
  @Input() height = 700
  @Input() isFullScreen = false
  @Input() items: SliderItem[] = []

  // otras propiedades
  public finalHeight: string | number = 0
  public currentPosition = 0

  constructor() {
    // la altura final depende de si es fullscreen
    this.finalHeight = this.isFullScreen ? '100vh' : `${this.height}px`
  }

  ngOnInit(): void {
    this.items.map((i, index) =>{
      i.id = index
      i.marginLeft = 0
    })
  }

  setCurrentPosition(position: number){
    this.currentPosition = position;
    this.items.find((i) => i.id === 0)!.marginLeft = - 100 * position
  }

  siguiente(){
    let finalMargin = 0
    let nextPosition = this.currentPosition + 1

    if(nextPosition <= this.items.length - 1){
      finalMargin = - 100 * nextPosition
    } else{
      nextPosition = 0
    }

    this.items.find((i) => i.id === 0)!.marginLeft = finalMargin
    this.currentPosition = nextPosition
  }

  anterior(){
    let finalMargin = 0
    let backPosition = this.currentPosition - 1

    if(backPosition >= 0){
      finalMargin = - 100 * backPosition
    }else{
      backPosition = this.items.length - 1
      finalMargin = - 100 * backPosition
    }

    this.items.find((i) => i.id === 0)!.marginLeft = finalMargin
    this.currentPosition = backPosition
  }

}
