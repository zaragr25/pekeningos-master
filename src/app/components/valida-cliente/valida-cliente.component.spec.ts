import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidaClienteComponent } from './valida-cliente.component';

describe('ValidaClienteComponent', () => {
  let component: ValidaClienteComponent;
  let fixture: ComponentFixture<ValidaClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidaClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
