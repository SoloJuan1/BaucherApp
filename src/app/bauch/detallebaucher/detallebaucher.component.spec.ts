import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallebaucherComponent } from './detallebaucher.component';

describe('DetallebaucherComponent', () => {
  let component: DetallebaucherComponent;
  let fixture: ComponentFixture<DetallebaucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallebaucherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallebaucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
