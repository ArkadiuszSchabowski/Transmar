import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { RepositoryContract } from 'src/interfaces/repository-contract/repository-contract.interface';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductRepository implements RepositoryContract<Product> {
  constructor(private readonly prisma: PrismaService) {}
  async add(dto: { name: string; id: number }): Promise<void> {
    await this.prisma.product.create({ data: dto });
  }
  async getById(id: number): Promise<{
    name: string;
    id: number;
    assemblyLines: {
      id: number;
      name: string;
      active: boolean;
      productId: number;
    }[];
  } | null> {
    return this.prisma.product.findUnique({
      where: { id },
      include: { assemblyLines: true },
    });
  }
  async getAll(): Promise<{ name: string; id: number }[]> {
    return this.prisma.product.findMany({
      orderBy: { id: 'desc' },
    });
  }
  async update(
    id: number,
    data: Partial<{ name: string; id: number }>,
  ): Promise<{ name: string; id: number }> {
    return this.prisma.product.update({ where: { id }, data });
  }
  async remove(id: number): Promise<void> {
    await this.prisma.product.delete({ where: { id } });
  }
}
