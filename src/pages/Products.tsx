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
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Products() {
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null)
    const [searchParams, setSearchParams] = useSearchParams();
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

    async function fetchProductsByCategory(catId: number | null) {
        if (catId) {
            setSearchParams({ category: String(catId) })
            setSelectedCategory(catId)
        } else {
            setSearchParams({})
            setSelectedCategory(null)
        }
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
                px: { xs: 0, md: 0 } ,
                minHeight: '800px'   
            }}
        >
            <header className="mb-8 flex justify-center gap-10">
                <div className="relative">
                    <Button
                        onClick={() => fetchProductsByCategory(null)}
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
                <div className="flex flex-wrap gap-x-[4px] gap-y-[24px]">
                    {Array.from({ length: 8}, (_, index) => (
                        <Stack key={index} className="w-[calc(50%-0.125rem)] md:w-[calc(33.333%-0.25rem)] lg:w-[calc(25%-0.25rem)]">
                            <Skeleton variant="rectangular" width="100%" height={400} />
                            <Skeleton variant="text" sx={{ fontSize: '14px' }} width={250} />
                            <Skeleton variant="text" sx={{ fontSize: '14px' }} width={50} />
                            <Skeleton variant="text" sx={{ fontSize: '11px' }} width={100} />
                            <div className="flex gap-1 mt-1">
                                {Array.from({ length: 4}, (_, indexI) => (
                                    <Skeleton key={indexI} variant="circular" width={22} height={22} />
                                ))}
                            </div>
                        </Stack>  
                    ))}
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
