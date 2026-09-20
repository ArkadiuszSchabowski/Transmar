import { TestBed } from '@angular/core/testing';

import { AssemblyLineWorkstationService } from './assembly-line-workstation-service';

describe('AssemblyLineWorkstationService', () => {
  let service: AssemblyLineWorkstationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssemblyLineWorkstationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
