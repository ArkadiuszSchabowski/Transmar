import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Add } from 'src/interfaces/add/add.interface';
import { AddAssemblyLineWorkstationDto } from 'src/models/assembly-line-workstation/add-assembly-line-workstation-dto';
import { AssemblyLineWorkstationRepository } from 'src/repositories/assembly-line-workstation-repository/assembly-line-workstation-repository';
import { AssemblyLineService } from '../assembly-line/assembly-line.service';
import { WorkstationService } from '../workstation/workstation.service';
import { AssemblyLineWorkstationValidator } from 'src/validators/assembly-line-workstation.validator';
import { plainToInstance } from 'class-transformer';
import { AssemblyLineWorkstationEntity } from 'src/entities/assembly-line-workstation-entity';
import { Remove } from 'src/interfaces/remove/remove.interface';
import { GetAll } from 'src/interfaces/get-all/get-all.interface';
import { GetAssemblyLineWorkstationDto } from 'src/models/assembly-line-workstation/get-assembly-line-workstation-dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class AssemblyLineWorkstationService
  implements
    Add<AddAssemblyLineWorkstationDto>,
    GetAll<GetAssemblyLineWorkstationDto>,
    Remove
{
  constructor(
    private readonly assemblyLineWorkstationRepository: AssemblyLineWorkstationRepository,
    private readonly assemblyLineService: AssemblyLineService,
    private readonly workstationService: WorkstationService,
    private readonly assemblyLineWorkStationValidator: AssemblyLineWorkstationValidator,
  ) {}

  async getAll(): Promise<GetAssemblyLineWorkstationDto[]> {
    const assignments = await this.assemblyLineWorkstationRepository.getAll();
    var getAssigments = plainToInstance(
      GetAssemblyLineWorkstationDto,
      assignments,
    );
    return getAssigments;
  }

  async remove(id: number): Promise<void> {
    const assemblyLine =
      await this.assemblyLineWorkstationRepository.getById(id);
    if (!assemblyLine) {
      throw new NotFoundException(
        `Assembly line workstation with id ${id} not found.`,
      );
    }

    await this.assemblyLineWorkstationRepository.remove(id);
  }

  async add(dto: AddAssemblyLineWorkstationDto): Promise<void> {
    this.assemblyLineWorkStationValidator.validateDto(dto);

    var assemblyLine = await this.assemblyLineService.getById(
      dto.assemblyLineId,
    );

    if (!assemblyLine) {
      throw new NotFoundException(`Assembly line does not exist.`);
    }

    var workstation = await this.workstationService.getById(dto.workstationId);

    if (!workstation) {
      throw new NotFoundException(`Workstation does not exist.`);
    }

    const order = await this.assemblyLineWorkstationRepository.getNextOrder(
      dto.assemblyLineId,
    );

    var entity = plainToInstance(AssemblyLineWorkstationEntity, dto, {
      excludeExtraneousValues: true,
    });

    try {
      await this.assemblyLineWorkstationRepository.add({
        ...entity,
        order,
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException(
          'This workstation is already assigned to this assembly line.',
        );
      }
      throw error;
    }
  }
}
