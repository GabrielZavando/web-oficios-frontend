import { Component, OnInit } from '@angular/core';
import { SliderBanner } from '../../models/slider.banner.model';
import { SLIDER_BANNER_DATA } from '../../../assets/data/slider-inicio';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  public DATA: SliderBanner[] = SLIDER_BANNER_DATA

  constructor() { }

  ngOnInit(): void {  }

}
