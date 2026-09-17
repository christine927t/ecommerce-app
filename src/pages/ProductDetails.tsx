import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchProductBySlug } from '../services/api';
import type { Product } from '../types/product'
import Breadcrumbs from '../components/productDetails/Breadcrumbs';

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
        <div className="flex flex-col md:flex-row">
            <div>
                <section className="px-4">
                    <Breadcrumbs category={product.category} />
                    <p className="md:hidden text-[17px] font-semibold mb-2">{product.name}</p>
                    <p className="md:hidden text-[16px] font-semibold mb-3">${Number(product.price).toFixed(2)}</p>
                </section>
                <section>
                    <img className="object-cover" src={product.imageUrl} alt={`Image for ` + product.name} />
                </section>
            </div>
            <div className="hidden md:block">
                <p className="text-[17px] font-semibold mb-2">{product.name}</p>
                <p className="text-[16px] font-semibold mb-3">${Number(product.price).toFixed(2)}</p>
            </div>
        </div>
    )
}