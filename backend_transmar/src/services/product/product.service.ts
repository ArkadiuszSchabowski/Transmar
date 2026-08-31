import { Injectable } from '@nestjs/common';
import { ServiceContract } from 'src/interfaces/service-contract/service-contract.interface';
import { AddProductDto } from 'src/models/product/add-product-dto';
import { GetProductDto } from 'src/models/product/get-product-dto';
import { UpdateProductDto } from 'src/models/product/update-product-dto';

@Injectable()
export class ProductService implements ServiceContract<AddProductDto, GetProductDto, UpdateProductDto>{
    add(dto: AddProductDto): Promise<void> {
        throw new Error('Method not implemented.');
    }
    getById(id: number): Promise<GetProductDto | null> {
        throw new Error('Method not implemented.');
    }
    getAll(): Promise<GetProductDto[]> {
        throw new Error('Method not implemented.');
    }
    update(id: number, data: Partial<UpdateProductDto>): Promise<UpdateProductDto> {
        throw new Error('Method not implemented.');
    }
    remove(id: number): Promise<void> {
        throw new Error('Method not implemented.');
    }
}
