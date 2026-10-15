import * as React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../../services/api'
import type { Product } from '../../types/product'
import { Link } from 'react-router-dom';
import ScrollButton from "../ScrollButton";
import { useEffect } from 'react';

export default function PicksForYou() {
    const cloudinaryBaseUrl = import.meta.env.VITE_CLOUDINARY_URL;

    const {
        data: products = [],
        isLoading,
        error,
    } = useQuery<Product[]>({
        queryKey: ['products'],
        queryFn: () => fetchProducts()
    });

    const [scrollLeft, setScrollLeft] = React.useState(0)
    const [scrollWidth, setScrollWidth] = React.useState(0)
    const [clientWidth, setClientWidth] = React.useState(0)

    useEffect(() => {
        const container = document.getElementById('picks-container')
        if (!container) return;

        const updateScrollLeft = () => setScrollLeft(container.scrollLeft);
        setScrollWidth(container.scrollWidth)
        setClientWidth(container.clientWidth)
        updateScrollLeft();
        
        container.addEventListener('scroll', updateScrollLeft, { passive: true});
        return () => container.removeEventListener('scroll', updateScrollLeft);
    }, [products])

    return (
        <section className="">
            <p className="text-[17px] font-bold mb-6 ps-4">Picks for You</p>
            <div className="relative max-w-[1920px] mx-auto">
                { scrollLeft > 0 && <ScrollButton direction="left" element="picks-container" /> }
                <div id="picks-container" className="flex gap-4 overflow-scroll scrollbar-none mt-4 px-4 mb-10">
                    {products.map((product, index) => {
                        return (
                            <Link to={`/products/${product.slug}`} key={"product_container" + index}>
                                <div className="img-container">
                                    <img src={`${cloudinaryBaseUrl}${product.imageUrl}`} key={"product" + index} alt="top picks for you" className="max-w-[359px] w-100 h-auto object-cover aspect-[calc(0.7435/1)]" />
                                    <p className="mt-2 text-[13px] font-semibold">{product.name}</p>
                                    <p className="mt-2 text-[13px] font-semibold">${product.price}</p>
                                </div>
                            </Link>
                        )
                    })}
                </div>
                { scrollLeft + clientWidth < scrollWidth && <ScrollButton direction="right" element="picks-container" /> }
            </div>
        </section>
    )
}