import { TestBed } from '@angular/core/testing';

import { AngserviceService } from './angservice.service';

describe('AngserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngserviceService = TestBed.get(AngserviceService);
    expect(service).toBeTruthy();
  });
});
