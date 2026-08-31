import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { AddProductDto } from 'src/models/product/add-product-dto';
import { GetProductDto } from 'src/models/product/get-product-dto';
import { UpdateProductDto } from 'src/models/product/update-product-dto';
import { ProductService } from 'src/services/product/product.service';

@Controller('product')
export class ProductController {
      constructor(private readonly service: ProductService) {}
    
      @Post()
      add(@Body() dto: AddProductDto): Promise<void> {
        return this.service.add(dto);
      }
    
      @Get()
      getAll(): Promise<GetProductDto[]> {
        return this.service.getAll();
      }
    
      @Get(':id')
      getById(@Param('id', ParseIntPipe) id: number): Promise<GetProductDto | null> {
        return this.service.getById(id);
      }
    
      @Put(':id')
      update(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: UpdateProductDto,
      ): Promise<UpdateProductDto> {
        return this.service.update(id, dto);
      }
    
      @Delete(':id')
      remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.service.remove(id);
      }
}
