import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestrosBuscadorComponent } from './maestros-buscador.component';

describe('MaestrosBuscadorComponent', () => {
  let component: MaestrosBuscadorComponent;
  let fixture: ComponentFixture<MaestrosBuscadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaestrosBuscadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestrosBuscadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
