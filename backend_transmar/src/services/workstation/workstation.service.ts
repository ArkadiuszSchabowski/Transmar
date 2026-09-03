import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { plainToInstance } from 'class-transformer';
import { WorkstationEntity } from 'src/entities/workstation-entity';
import { ServiceContract } from 'src/interfaces/service-contract/service-contract.interface';
import { AddWorkstationDto } from 'src/models/workstation/add-workstation-dto';
import { GetWorkstationDto } from 'src/models/workstation/get-workstation-dto';
import { UpdateWorkstationDto } from 'src/models/workstation/update-workstation-dto';
import { WorkstationRepository } from 'src/repositories/workstation-repository/workstation-repository';
import { WorkstationValidator } from 'src/validators/workstation-validator';

@Injectable()
export class WorkstationService implements ServiceContract<
  AddWorkstationDto,
  GetWorkstationDto,
  UpdateWorkstationDto
> {
  constructor(
    private readonly workstationRepository: WorkstationRepository,
    private readonly workstationValidator: WorkstationValidator,
  ) {}

  async add(dto: AddWorkstationDto): Promise<void> {
    this.workstationValidator.validateDto(dto);

    const workstation = plainToInstance(
      WorkstationEntity,
      {
        ...dto,
      },
      { excludeExtraneousValues: true },
    );

    try {
      await this.workstationRepository.add(workstation as any);
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException(
          `Workstation name '${dto.name}' is already taken.`,
        );
      }
      throw error;
    }
  }
  async getById(id: number): Promise<GetWorkstationDto | null> {
    const workstation = await this.workstationRepository.getById(id);
    if (!workstation) {
      throw new NotFoundException(`Workstation with id ${id} not found.`);
    }

    return plainToInstance(GetWorkstationDto, workstation, {
      excludeExtraneousValues: true,
    });
  }

  async getAll(): Promise<GetWorkstationDto[]> {
    const workstations = await this.workstationRepository.getAll();
    return plainToInstance(GetWorkstationDto, workstations, {
      excludeExtraneousValues: true,
    });
  }
  async update(
    id: number,
    data: Partial<UpdateWorkstationDto>,
  ): Promise<UpdateWorkstationDto> {
    this.workstationValidator.validateName(data.name);
    this.workstationValidator.validatePcName(data.pcName);
    this.workstationValidator.validateShortName(data.shortName);
    const workstation = await this.workstationRepository.getById(id);
    if (!workstation) {
      throw new NotFoundException(`Workstation with id ${id} not found.`);
    }

    const updatedWorkstation = plainToInstance(
      WorkstationEntity,
      {
        ...workstation,
        ...data,
      },
    );

    try {
      const updated = await this.workstationRepository.update(
        id,
        updatedWorkstation,
      );
      return plainToInstance(UpdateWorkstationDto, updated, {
        excludeExtraneousValues: true,
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException(
          `Workstation name '${data.name}' is already taken.`,
        );
      }
      throw error;
    }
  }

  async remove(id: number): Promise<void> {
    const workstation = await this.workstationRepository.getById(id);
    if (!workstation) {
      throw new NotFoundException(`Workstation with id ${id} not found.`);
    }

    await this.workstationRepository.remove(id);
  }
}