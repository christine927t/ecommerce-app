import { Link } from 'react-router-dom';
import type { Product } from '../types/product'
import { Typography } from '@mui/material';

//defining product props type
type ProductCardProps = {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <Link to={`/products/${product.slug}`} key={product.id} className="w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)] xl:w-[calc(25%-1rem)]">
            {product.imageUrl? (
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="object-cover h-[400px] md:h-[400px] w-fit"
                />
            ) : (
                <div className="h-44 bg-gray-100 flex items-center justify-center">
                    <Typography color="textSecondary">No image</Typography>
                </div>
            )}
            <p>{product.name}</p>
            <p>${product.price}</p>
        </Link>
    )
}