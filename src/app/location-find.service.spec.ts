import { TestBed } from '@angular/core/testing';

import { LocationFindService } from './location-find.service';

describe('LocationFindService', () => {
  let service: LocationFindService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationFindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
