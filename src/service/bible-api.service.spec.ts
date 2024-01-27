import { TestBed } from '@angular/core/testing';

import { BibleAPIService } from './bible-api.service';

describe('BibleAPIService', () => {
  let service: BibleAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BibleAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
