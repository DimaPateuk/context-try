import { TestBed } from '@angular/core/testing';

import { ContextProviderService } from './context-provider.service';

describe('ContextProviderService', () => {
  let service: ContextProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContextProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
