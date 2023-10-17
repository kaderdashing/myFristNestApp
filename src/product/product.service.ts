import { Injectable } from '@nestjs/common';
import { Product } from './entities/product';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private productsRepository: Repository<Product>,
    ) {}

    // Create (Création)
    async create(product: Product): Promise<Product> {
        return this.productsRepository.save(product);
    }

    // Read (Lecture)
    async findAll(): Promise<Product[]> {
        return this.productsRepository.find();
    }



    // Delete (Suppression)
    async remove(id: number): Promise<void> {
        await this.productsRepository.delete(id);
    }
}
