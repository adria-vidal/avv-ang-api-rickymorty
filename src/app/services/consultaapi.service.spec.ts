import { TestBed } from '@angular/core/testing';

import { ConsultaapiService } from './consultaapi.service';

describe('ConsultaapiService', () => {
  let service: ConsultaapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
