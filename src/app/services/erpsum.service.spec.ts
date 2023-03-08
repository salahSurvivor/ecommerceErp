import { TestBed } from '@angular/core/testing';

import { ErpsumService } from './erpsum.service';

describe('ErpsumService', () => {
  let service: ErpsumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErpsumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
