import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonUpComponent } from './boton-up.component';

describe('BotonUpComponent', () => {
  let component: BotonUpComponent;
  let fixture: ComponentFixture<BotonUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
