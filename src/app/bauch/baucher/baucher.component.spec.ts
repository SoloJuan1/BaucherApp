import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaucherComponent } from './baucher.component';

describe('BaucherComponent', () => {
  let component: BaucherComponent;
  let fixture: ComponentFixture<BaucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaucherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
