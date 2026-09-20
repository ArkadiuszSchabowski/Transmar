import { TestBed } from '@angular/core/testing';

import { AssemblyLineWorkstationService } from './assembly-line-workstation-service';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

describe('AssemblyLineWorkstationService', () => {
  let service: AssemblyLineWorkstationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection(), provideHttpClient()],
    });
    service = TestBed.inject(AssemblyLineWorkstationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
