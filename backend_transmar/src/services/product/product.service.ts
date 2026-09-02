import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { plainToInstance } from 'class-transformer';
import { ProductEntity } from 'src/entities/product-entity';
import { ServiceContract } from 'src/interfaces/service-contract/service-contract.interface';
import { AddProductDto } from 'src/models/product/add-product-dto';
import { GetProductDto } from 'src/models/product/get-product-dto';
import { UpdateProductDto } from 'src/models/product/update-product-dto';
import { ProductRepository } from 'src/repositories/product-repository/product-repository';
import { ProductValidator } from 'src/validators/product-validator';

@Injectable()
export class ProductService implements ServiceContract<
  AddProductDto,
  GetProductDto,
  UpdateProductDto
> {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly productValidator: ProductValidator,
  ) {}

  async add(dto: AddProductDto): Promise<void> {
    this.productValidator.validateDto(dto);

    const product = plainToInstance(
      ProductEntity,
      {
        ...dto,
      },
      { excludeExtraneousValues: true },
    );

    try {
      await this.productRepository.add(product as any);
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException(
          `Product name '${dto.name}' is already taken.`,
        );
      }
      throw error;
    }
  }
  async getById(id: number): Promise<GetProductDto | null> {
    const product = await this.productRepository.getById(id);
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found.`);
    }

    return plainToInstance(GetProductDto, product, {
      excludeExtraneousValues: true,
    });
  }

  async getAll(): Promise<GetProductDto[]> {
    const products = await this.productRepository.getAll();
    return plainToInstance(GetProductDto, products, {
      excludeExtraneousValues: true,
    });
  }
  async update(
    id: number,
    data: Partial<UpdateProductDto>,
  ): Promise<UpdateProductDto> {
    this.productValidator.validateName(data.name);
    const product = await this.productRepository.getById(id);
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found.`);
    }

    const updatedProduct = plainToInstance(
      ProductEntity,
      {
        ...product,
        ...data,
      },
    );

    try {
      const updated = await this.productRepository.update(id, updatedProduct);
      return plainToInstance(UpdateProductDto, updated, {
        excludeExtraneousValues: true,
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException(
          `Product name '${data.name}' is already taken.`,
        );
      }
      throw error;
    }
  }

  async remove(id: number): Promise<void> {
    const product = await this.productRepository.getById(id);
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found.`);
    }

    await this.productRepository.remove(id);
  }
}
