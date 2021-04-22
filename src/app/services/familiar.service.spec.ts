import { TestBed } from '@angular/core/testing';

import { FamiliarService } from './familiar.service';

describe('FamiliarService', () => {
  let service: FamiliarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FamiliarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
