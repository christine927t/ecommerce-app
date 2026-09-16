import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchProductBySlug } from '../services/api';
import type { Product } from '../types/product'

export default function ProductDetails() {
    const { slug } = useParams<{ slug: string }>();

    const {
        data: product, 
        isLoading, 
        error 
    } = useQuery<Product>({
        queryKey: ['product', slug],
        queryFn: () => fetchProductBySlug(slug!),
        enabled: !!slug,
    });

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        const isNotFound = 
            error instanceof Error && error?.message?.includes('404')

        if (isNotFound) {
            return <p>Product not found.</p>
        }

        return <p>Failed to load product.</p>
    }

    if (!product) {
        return <p>Product not found.</p>
    }

    return (
 
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>Category: {product.category.name}</p>
        </div>
    )
}