import { BadRequestException, Injectable } from '@nestjs/common';
import { ValidatorContract } from 'src/interfaces/validator-contract/validator-contract.interface';
import { AddAssemblyLineWorkstationDto } from 'src/models/assembly-line-workstation/add-assembly-line-workstation-dto';

@Injectable()
export class AssemblyLineWorkstationValidator
  implements ValidatorContract<AddAssemblyLineWorkstationDto>
{
  validateDto(dto: AddAssemblyLineWorkstationDto): void {
    this.validateAssemblyLineId(dto.assemblyLineId);
    this.validateWorkstationId(dto.workstationId);
  }

  validateAssemblyLineId(assemblyLineId: number | undefined): void {
    if (assemblyLineId === undefined || assemblyLineId === null) {
      throw new BadRequestException('Assembly line id is required.');
    }
    if (!Number.isInteger(assemblyLineId) || assemblyLineId <= 0) {
      throw new BadRequestException('Assembly line id must be a positive integer.');
    }
  }

  validateWorkstationId(workstationId: number | undefined): void {
    if (workstationId === undefined || workstationId === null) {
      throw new BadRequestException('Workstation id is required.');
    }
    if (!Number.isInteger(workstationId) || workstationId <= 0) {
      throw new BadRequestException('Workstation id must be a positive integer.');
    }
  }
}