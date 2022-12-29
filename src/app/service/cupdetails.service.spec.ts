import { TestBed } from '@angular/core/testing';

import { CupdetailsService } from './cupdetails.service';

describe('CupdetailsService', () => {
  let service: CupdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CupdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
