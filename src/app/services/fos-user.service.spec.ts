import { TestBed } from '@angular/core/testing';

import { FosUserService } from './fos-user.service';

describe('FosUserService', () => {
  let service: FosUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FosUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
