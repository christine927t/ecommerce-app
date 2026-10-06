import { Link } from 'react-router-dom';
import type { Product } from '../types/product'
import { Typography } from '@mui/material';
import ColorSwatches from './ColorSwatches';

//defining product props type
type ProductCardProps = {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
    const cloudinaryBaseUrl = import.meta.env.VITE_CLOUDINARY_URL;

    return (
        <Link to={`/products/${product.slug}`} key={product.id} className="w-[calc(50%-0.125rem)] md:w-[calc(33.333%-0.25rem)] lg:w-[calc(25%-0.25rem)]">
            {product.imageUrl? (
                <img
                    src={`${cloudinaryBaseUrl}${product.imageUrl}`}
                    alt={product.name}
                    className="object-cover h-[400px] md:h-[400px] w-fit mb-2"
                />
            ) : (
                <div className="h-44 bg-gray-100 flex items-center justify-center">
                    <Typography color="textSecondary">No image</Typography>
                </div>
            )}
            <div className="px-2">
                <p className="text-[14px] font-semibold mb-2">{product.name}</p>
                <p className="text-[14px] font-semibold mb-2">${product.price}</p>
                <ColorSwatches />
            </div>

        </Link>
    )
}