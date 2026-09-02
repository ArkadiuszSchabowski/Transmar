import { Module } from '@nestjs/common';
import { ProductController } from 'src/controllers/product/product.controller';
import { ProductRepository } from 'src/repositories/product-repository/product-repository';
import { ProductService } from 'src/services/product/product.service';
import { ProductValidator } from 'src/validators/product-validator';

@Module({
  controllers: [ProductController],
  providers: [ProductService, ProductRepository, ProductValidator],
})
export class ProductModule {}
