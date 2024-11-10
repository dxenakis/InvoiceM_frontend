import { TestBed } from '@angular/core/testing';

import { SysParamsService } from './sys-params.service';

describe('SysParamsService', () => {
  let service: SysParamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SysParamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
