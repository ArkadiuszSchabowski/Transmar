import { Test, TestingModule } from '@nestjs/testing';
import { AssemblyLineWorkstationController } from './assembly-line-workstation.controller';

describe('AssemblyLineWorkstationController', () => {
  let controller: AssemblyLineWorkstationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssemblyLineWorkstationController],
    }).compile();

    controller = module.get<AssemblyLineWorkstationController>(AssemblyLineWorkstationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
