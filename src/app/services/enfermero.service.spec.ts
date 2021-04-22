import { TestBed } from '@angular/core/testing';

import { EnfermeroService } from './enfermero.service';

describe('EnfermeroService', () => {
  let service: EnfermeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnfermeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
