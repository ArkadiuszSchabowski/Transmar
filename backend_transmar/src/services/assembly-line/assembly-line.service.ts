import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { plainToInstance } from 'class-transformer';
import { AssemblyLineEntity } from 'src/entities/assembly-line-entity';
import { GetByProduct } from 'src/interfaces/get-by-product/get-by-product.interface';
import { ServiceContract } from 'src/interfaces/service-contract/service-contract.interface';
import { AddAssemblyLineDto } from 'src/models/assembly-line/add-assembly-line-dto';
import { GetAssemblyLineDto } from 'src/models/assembly-line/get-assembly-line-dto';
import { UpdateAssemblyLineDto } from 'src/models/assembly-line/update-assembly-line-dto';
import { AssemblyLineRepository } from 'src/repositories/assembly-line-repository/assembly-line-repository';
import { AssemblyLineValidator } from 'src/validators/assembly-line.validator';
import { ProductValidator } from 'src/validators/product-validator';

@Injectable()
export class AssemblyLineService
  implements
    ServiceContract<AddAssemblyLineDto, GetAssemblyLineDto, UpdateAssemblyLineDto>, GetByProduct<GetAssemblyLineDto>
{
  constructor(
    private readonly assemblyLineRepository: AssemblyLineRepository,
    private readonly assemblyLineValidator: AssemblyLineValidator,
    private readonly productValidator: ProductValidator
  ) {}
  async getByProduct(name: string): Promise<GetAssemblyLineDto[]> {
    this.productValidator.validateName(name);

    var assemblyLines = await this.assemblyLineRepository.getByProduct(name);

      return plainToInstance(GetAssemblyLineDto, assemblyLines, {
      excludeExtraneousValues: true,
    });
  }

  async add(dto: AddAssemblyLineDto): Promise<void> {
    this.assemblyLineValidator.validateDto(dto);

    const assemblyLine = plainToInstance(
      AssemblyLineEntity,
      {
        ...dto,
      },
      { excludeExtraneousValues: true },
    );

    try {
      await this.assemblyLineRepository.add(assemblyLine as any);
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException(
          `Assembly line name '${dto.name}' is already taken.`,
        );
      }
      throw error;
    }
  }

  async getById(id: number): Promise<GetAssemblyLineDto | null> {
    const assemblyLine = await this.assemblyLineRepository.getById(id);
    if (!assemblyLine) {
      throw new NotFoundException(`Assembly line with id ${id} not found.`);
    }

    return plainToInstance(GetAssemblyLineDto, assemblyLine, {
      excludeExtraneousValues: true,
    });
  }

  async getAll(): Promise<GetAssemblyLineDto[]> {
    const assemblyLines = await this.assemblyLineRepository.getAll();
    return plainToInstance(GetAssemblyLineDto, assemblyLines, {
      excludeExtraneousValues: true,
    });
  }

  async update(
    id: number,
    data: Partial<UpdateAssemblyLineDto>,
  ): Promise<UpdateAssemblyLineDto> {
    this.assemblyLineValidator.validateName(data.name);
    const assemblyLine = await this.assemblyLineRepository.getById(id);
    if (!assemblyLine) {
      throw new NotFoundException(`Assembly line with id ${id} not found.`);
    }

    try {
      const updated = await this.assemblyLineRepository.update(id, data);
      return plainToInstance(UpdateAssemblyLineDto, updated, {
        excludeExtraneousValues: true,
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException(
          `Assembly line name '${data.name}' is already taken.`,
        );
      }
      throw error;
    }
  }

  async remove(id: number): Promise<void> {
    const assemblyLine = await this.assemblyLineRepository.getById(id);
    if (!assemblyLine) {
      throw new NotFoundException(`Assembly line with id ${id} not found.`);
    }

    await this.assemblyLineRepository.remove(id);
  }
}