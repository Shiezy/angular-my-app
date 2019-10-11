import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HesabuComponent } from './hesabu.component';

describe('HesabuComponent', () => {
  let component: HesabuComponent;
  let fixture: ComponentFixture<HesabuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HesabuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HesabuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
