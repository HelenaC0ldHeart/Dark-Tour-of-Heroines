import { TestBed } from '@angular/core/testing';

import { HeroinesService } from './heroines.service';

describe('HeroinesService', () => {
  let service: HeroinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
