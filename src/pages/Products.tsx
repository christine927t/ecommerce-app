import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { fetchProducts, fetchCategories } from '../services/api'
import {
    CircularProgress,
    Container,
    Button,
} from '@mui/material';
import type { Product, Category } from '../types/product'
import ProductCard from '../components/products/ProductCard'

export default function Products() {
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null)
    const [searchParams] = useSearchParams();
    const categoryId = searchParams.get("category");

    const {
        data: products = [],
        isLoading,
        error,
    } = useQuery<Product[]>({
        queryKey: ['products', categoryId],
        queryFn: () => 
            categoryId 
                ? fetchProducts(Number(categoryId))
                : fetchProducts()
    });

    useEffect(() => {
        setSelectedCategory(categoryId ? Number(categoryId) : null)
    }, [categoryId])

    const {
        data: categories = [],
        isLoading: categoriesLoading,
        error: categoriesError,
    } = useQuery<Category[]>({
        queryKey: ['categories'],
        queryFn: fetchCategories
    })

    async function fetchProductsByCategory(catId) {
        fetchProducts(Number(catId))
        setSelectedCategory(catId)
    }

    const buttonSx = {
        border: 'none',
        fontSize: '13px',
        fontWeight: '600',
        color: '#282828',
        padding: '0px',
        minWidth: 'unset'
    }

    const filteredProducts = 
        selectedCategory === null
            ? products
            : products.filter(
                (product) => product.categoryId === selectedCategory
            )

    return (
        <Container 
            sx={{
                py: 4,
                px: { xs: 0, md: 0 }    
            }}
        >
            <header className="mb-8 flex justify-center gap-10">
                <div className="relative">
                    <Button
                        onClick={() => setSelectedCategory(null)}
                        sx={buttonSx}
                    >
                        All
                    </Button>
                    <>
                        {selectedCategory === null && (
                            <span className="h-[2px] absolute w-[100%] bottom-0 left-0 bg-[#282828]"></span>
                        )}
                    </>
                </div>

                {categories.map((category) => (   
                    <div key={category.id} className="relative">
                        <Button
                            onClick={() => fetchProductsByCategory(category.id)}
                            sx={buttonSx}
                        >
                            {category.name}
                        </Button>
                        <>
                            {selectedCategory === category.id && (
                                <span className="h-[2px] absolute w-[100%] bottom-0 left-0 bg-[#282828]"></span>
                            )}
                        </>
                    </div>
                ))}
            </header>

            {isLoading ? (
                <div className="flex justify-center py-20">
                    <CircularProgress />
                </div>
            ) : error ? (
                <div className="text-center text-red-600 py-8">{error.message}</div>
            ) : (
                <div className="flex flex-wrap gap-x-[4px] gap-y-[24px]">
                    {filteredProducts.map((p) => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            )}
        </Container>
    )
}
