import { Component } from '@angular/core';
import { SliderItem } from './models/slider.model';
import { SLIDER_DATA_ITEM } from './services/data/slider.content';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oficios';
  public sliderData: SliderItem[] = SLIDER_DATA_ITEM
}
