import { Test, TestingModule } from '@nestjs/testing';
import { AssemblyLineController } from './assembly-line.controller';

describe('AssemblyLineController', () => {
  let controller: AssemblyLineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssemblyLineController],
    }).compile();

    controller = module.get<AssemblyLineController>(AssemblyLineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
