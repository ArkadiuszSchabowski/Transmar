import { Module } from '@nestjs/common';
import { AssemblyLineWorkstationController } from 'src/controllers/assembly-line-workstation/assembly-line-workstation.controller';
import { AssemblyLineWorkstationRepository } from 'src/repositories/assembly-line-workstation-repository/assembly-line-workstation-repository';
import { AssemblyLineWorkstationService } from 'src/services/assembly-line-workstation/assembly-line-workstation.service';
import { AssemblyLineModule } from './assembly-line.module';
import { WorkstationModule } from './workstation.module';
import { AssemblyLineWorkstationValidator } from 'src/validators/assembly-line-workstation.validator';

@Module({
  imports: [AssemblyLineModule, WorkstationModule],
  controllers: [AssemblyLineWorkstationController],
  providers: [
    AssemblyLineWorkstationService,
    AssemblyLineWorkstationRepository,
    AssemblyLineWorkstationValidator
  ],
})
export class AssemblyLineWorkstationModule {}
