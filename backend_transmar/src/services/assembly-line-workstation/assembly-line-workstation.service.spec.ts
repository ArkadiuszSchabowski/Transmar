import { Test, TestingModule } from '@nestjs/testing';
import { AssemblyLineWorkstationService } from './assembly-line-workstation.service';

describe('AssemblyLineWorkstationService', () => {
  let service: AssemblyLineWorkstationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssemblyLineWorkstationService],
    }).compile();

    service = module.get<AssemblyLineWorkstationService>(AssemblyLineWorkstationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
