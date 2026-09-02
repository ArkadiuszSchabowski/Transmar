import { Module } from '@nestjs/common';
import { AssemblyLineController } from 'src/controllers/assembly-line/assembly-line.controller';
import { AssemblyLineRepository } from 'src/repositories/assembly-line-repository/assembly-line-repository';
import { AssemblyLineService } from 'src/services/assembly-line/assembly-line.service';
import { AssemblyLineValidator } from 'src/validators/assembly-line.validator';

@Module({
  controllers: [AssemblyLineController],
  providers: [AssemblyLineService, AssemblyLineRepository, AssemblyLineValidator],
})
export class AssemblyLineModule {}
