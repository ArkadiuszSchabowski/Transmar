import { TestBed } from '@angular/core/testing';

import { AssemblyLineService } from './assembly-line-service';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

describe('AssemblyLineService', () => {
  let service: AssemblyLineService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection(), provideHttpClient()],
    });
    service = TestBed.inject(AssemblyLineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
