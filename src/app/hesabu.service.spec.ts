import { TestBed } from '@angular/core/testing';

import { HesabuService } from './hesabu.service';

describe('HesabuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HesabuService = TestBed.get(HesabuService);
    expect(service).toBeTruthy();
  });
});
