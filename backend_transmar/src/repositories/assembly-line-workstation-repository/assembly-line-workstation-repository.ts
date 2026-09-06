import { Injectable } from '@nestjs/common';
import { AssemblyLineWorkstationEntity } from 'src/entities/assembly-line-workstation-entity';
import { Add } from 'src/interfaces/add/add.interface';
import { Get } from 'src/interfaces/get/get.interface';
import { Remove } from 'src/interfaces/remove/remove.interface';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AssemblyLineWorkstationRepository
  implements
    Add<AssemblyLineWorkstationEntity>,
    Get<AssemblyLineWorkstationEntity>,
    Remove
{
  constructor(private readonly prisma: PrismaService) {}
  async remove(id: number): Promise<void> {
    await this.prisma.assemblyLineWorkstation.delete({ where: { id } });
  }
  async getById(id: number): Promise<AssemblyLineWorkstationEntity | null> {
    return this.prisma.assemblyLineWorkstation.findUnique({ where: { id } });
  }
  async getAll(): Promise<AssemblyLineWorkstationEntity[]> {
    return this.prisma.assemblyLineWorkstation.findMany();
  }

  async add(dto: AssemblyLineWorkstationEntity): Promise<void> {
    await this.prisma.assemblyLineWorkstation.create({ data: dto });
  }

  async getNextOrder(assemblyLineId: number): Promise<number> {
    const count = await this.prisma.assemblyLineWorkstation.count({
      where: { assemblyLineId },
    });
    return count + 1;
  }
}
