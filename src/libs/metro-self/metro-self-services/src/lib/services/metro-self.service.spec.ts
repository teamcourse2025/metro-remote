import { TestBed } from '@angular/core/testing';

import { MetroSelfService } from './metro-self.service';

describe('MetroSelfService', () => {
  let service: MetroSelfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetroSelfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
