import { TestBed } from '@angular/core/testing';

import { OutService } from './out.service';

describe('OutService', () => {
  let service: OutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
