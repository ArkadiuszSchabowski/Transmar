import { Test, TestingModule } from '@nestjs/testing';
import { AssemblyLineService } from './assembly-line.service';

describe('AssemblyLineService', () => {
  let service: AssemblyLineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssemblyLineService],
    }).compile();

    service = module.get<AssemblyLineService>(AssemblyLineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
