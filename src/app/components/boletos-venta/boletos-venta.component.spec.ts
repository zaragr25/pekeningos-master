import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletosVentaComponent } from './boletos-venta.component';

describe('BoletosVentaComponent', () => {
  let component: BoletosVentaComponent;
  let fixture: ComponentFixture<BoletosVentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoletosVentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoletosVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
