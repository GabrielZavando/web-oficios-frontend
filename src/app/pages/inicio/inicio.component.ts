import { Component, OnInit } from '@angular/core';
import { SliderItem } from '../../models/slider.model';
import { SLIDER_DATA_ITEM } from '../../../assets/data/slider.content';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  public sliderData: SliderItem[] = SLIDER_DATA_ITEM

  constructor() { }

  ngOnInit(): void {
  }

}
