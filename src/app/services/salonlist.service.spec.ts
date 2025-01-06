import { TestBed } from '@angular/core/testing';

import { SalonlistService } from './salonlist.service';

describe('SalonlistService', () => {
  let service: SalonlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalonlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
