import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVideoSliderComponent } from './card-video-slider.component';

describe('CardVideoSliderComponent', () => {
  let component: CardVideoSliderComponent;
  let fixture: ComponentFixture<CardVideoSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardVideoSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardVideoSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
