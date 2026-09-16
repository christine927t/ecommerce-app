import {
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Min,
} from 'class-validator';

export class CreateProductDto {
    @IsString()
    name: string;

    @IsString()
    slug: string;

    @IsString()
    description?: string;

    @IsNumber()
    @Min(0)
    price: number;

    @IsOptional()
    @IsUrl()
    imageUrl?: string;

    @IsInt()
    categoryId: number;
}
