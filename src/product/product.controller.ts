
import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './entities/product';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() Product: Product): Promise<Product> {
    return this.productService.create(Product);
  }

  @Get()
  findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }



  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.productService.remove(+id);
  }
}
