import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FosUserComponent } from './fos-user.component';

describe('FosUserComponent', () => {
  let component: FosUserComponent;
  let fixture: ComponentFixture<FosUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FosUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FosUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
