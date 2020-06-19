import { TestBed } from '@angular/core/testing';

import { CastVideoService } from './cast-video.service';

describe('CastVideoService', () => {
  let service: CastVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CastVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
