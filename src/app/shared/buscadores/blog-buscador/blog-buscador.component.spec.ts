import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogBuscadorComponent } from './blog-buscador.component';

describe('BlogBuscadorComponent', () => {
  let component: BlogBuscadorComponent;
  let fixture: ComponentFixture<BlogBuscadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogBuscadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogBuscadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
