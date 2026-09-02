import { Injectable } from '@nestjs/common';
import { AssemblyLine } from '@prisma/client';
import { RepositoryContract } from 'src/interfaces/repository-contract/repository-contract.interface';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AssemblyLineRepository implements RepositoryContract<AssemblyLine> {
  constructor(private readonly prisma: PrismaService) {}

  async add(dto: {
    name: string;
    id: number;
    active: boolean;
    productId: number;
  }): Promise<void> {
    await this.prisma.assemblyLine.create({ data: dto });
  }

  async getById(id: number): Promise<AssemblyLine | null> {
    return this.prisma.assemblyLine.findUnique({ where: { id } });
  }

  async getAll(): Promise<AssemblyLine[]> {
    return this.prisma.assemblyLine.findMany();
  }

  async update(
    id: number,
    data: Partial<{
      name: string;
      id: number;
      active: boolean;
      productId: number;
    }>,
  ): Promise<AssemblyLine> {
    return this.prisma.assemblyLine.update({ where: { id }, data });
  }

  async remove(id: number): Promise<void> {
    await this.prisma.assemblyLine.delete({ where: { id } });
  }
}