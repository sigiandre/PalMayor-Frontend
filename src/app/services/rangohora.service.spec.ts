import { TestBed } from '@angular/core/testing';

import { RangohoraService } from './rangohora.service';

describe('RangohoraService', () => {
  let service: RangohoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RangohoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
