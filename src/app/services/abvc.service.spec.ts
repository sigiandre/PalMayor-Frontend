import { TestBed } from '@angular/core/testing';

import { AbvcService } from './abvc.service';

describe('AbvcService', () => {
  let service: AbvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
