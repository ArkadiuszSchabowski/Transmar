import { Injectable } from '@nestjs/common';
import { Workstation } from '@prisma/client';
import { RepositoryContract } from 'src/interfaces/repository-contract/repository-contract.interface';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WorkstationRepository implements RepositoryContract<Workstation> {
  constructor(private readonly prisma: PrismaService) {}

  async add(dto: {
    name: string;
    id: number;
    shortName: string;
    pcName: string;
  }): Promise<void> {
    await this.prisma.workstation.create({ data: dto });
  }

  async getById(id: number): Promise<{
    name: string;
    id: number;
    shortName: string;
    pcName: string;
  } | null> {
    return this.prisma.workstation.findUnique({ where: { id } });
  }

  async getAll(): Promise<
    { name: string; id: number; shortName: string; pcName: string }[]
  > {
    return this.prisma.workstation.findMany();
  }

  async update(
    id: number,
    data: Partial<{
      name: string;
      id: number;
      shortName: string;
      pcName: string;
    }>,
  ): Promise<{ name: string; id: number; shortName: string; pcName: string }> {
    return this.prisma.workstation.update({ where: { id }, data });
  }

  async remove(id: number): Promise<void> {
    await this.prisma.workstation.delete({ where: { id } });
  }
}
