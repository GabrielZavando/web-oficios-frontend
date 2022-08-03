import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasonryLightboxComponent } from './masonry-lightbox.component';

describe('MasonryLightboxComponent', () => {
  let component: MasonryLightboxComponent;
  let fixture: ComponentFixture<MasonryLightboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasonryLightboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasonryLightboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
