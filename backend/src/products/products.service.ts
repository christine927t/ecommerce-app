import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateProductDto } from './dto/create-product.dto/create-product.dto.js';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.product.findMany({
      include: {
        category: true,
      },
    });
  }

  async findOne(id: number) {
    const product = await this.prisma.product.findUnique({
      where: {
        id,
      },
      include: {
        category: true,
      }
    });

    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    return product;
  }

  async findBySlug(slug: string) {
    const product = await this.prisma.product.findUnique({
      where :{
        slug,
      },
      include: {
        category: true,
      }
    })

    if (!product) {
      throw new NotFoundException(`Product with slug "${slug} not found`);
    }

    return product;
  }

  async findByCategory(categoryId: number) {
    const products = await this.prisma.product.findMany({
      where: {
        categoryId
      }
    })

    if (products.length === 0) {
      throw new NotFoundException(`Products with categoryId: "${categoryId}" not found`);
    }

    return products;
  }

  async create(createProductDto: CreateProductDto) {
    return this.prisma.product.create({
      data: createProductDto,
      include: {
        category: true
      }
    });
  }
}