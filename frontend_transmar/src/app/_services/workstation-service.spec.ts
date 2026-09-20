import { TestBed } from '@angular/core/testing';

import { WorkstationService } from './workstation-service';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

describe('WorkstationService', () => {
  let service: WorkstationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection(), provideHttpClient()],
    });
    service = TestBed.inject(WorkstationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
