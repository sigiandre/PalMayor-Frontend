import { TestBed } from '@angular/core/testing';

import { AncianoService } from './anciano.service';

describe('AncianoService', () => {
  let service: AncianoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AncianoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
