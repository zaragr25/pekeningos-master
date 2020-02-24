import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoBoletosComponent } from './pago-boletos.component';

describe('PagoBoletosComponent', () => {
  let component: PagoBoletosComponent;
  let fixture: ComponentFixture<PagoBoletosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoBoletosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoBoletosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
