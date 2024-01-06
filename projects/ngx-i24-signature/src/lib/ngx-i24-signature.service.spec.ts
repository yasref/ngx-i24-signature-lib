import { TestBed } from '@angular/core/testing';

import { NgxI24SignatureService } from './ngx-i24-signature.service';

describe('NgxI24SignatureService', () => {
  let service: NgxI24SignatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxI24SignatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
