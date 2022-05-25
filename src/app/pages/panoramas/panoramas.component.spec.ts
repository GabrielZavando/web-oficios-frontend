import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoramasComponent } from './panoramas.component';

describe('PanoramasComponent', () => {
  let component: PanoramasComponent;
  let fixture: ComponentFixture<PanoramasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanoramasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanoramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
