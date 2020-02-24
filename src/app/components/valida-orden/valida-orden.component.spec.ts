import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidaOrdenComponent } from './valida-orden.component';

describe('ValidaOrdenComponent', () => {
  let component: ValidaOrdenComponent;
  let fixture: ComponentFixture<ValidaOrdenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidaOrdenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidaOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
