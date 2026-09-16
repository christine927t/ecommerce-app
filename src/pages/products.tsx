import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts, fetchCategories } from '../services/api'
import {
    CircularProgress,
    Container,
    Button,
} from '@mui/material';
import type { Product, Category } from '../types/product'
import ProductCard from '../components/products/ProductCard'
import '../styles/products.css'

export default function Products() {
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null)

    const {
        data: products = [],
        isLoading,
        error,
    } = useQuery<Product[]>({
        queryKey: ['products'],
        queryFn: fetchProducts,
    });

    const {
        data: categories = [],
        isLoading: categoriesLoading,
        error: categoriesError,
    } = useQuery<Category[]>({
        queryKey: ['categories'],
        queryFn: fetchCategories
    })

    const filteredProducts = 
        selectedCategory === null
            ? products
            : products.filter(
                (product) => product.categoryId === selectedCategory
            )

    return (
        <Container className="py-8">
            <header className="mb-8">
                <Button
                    variant={selectedCategory === null ? 'contained' : 'outlined'}
                    onClick={() => setSelectedCategory(null)}
                >
                    All
                </Button>

                {categories.map((category) => (
                    <Button
                        key={category.id}
                        variant={
                            selectedCategory === category.id ? 'contained' : 'outlined'
                        }
                        onClick={() => setSelectedCategory(category.id)}
                    >
                        {category.name}
                    </Button>
                ))}
            </header>

            {isLoading ? (
                <div className="flex justify-center py-20">
                    <CircularProgress />
                </div>
            ) : error ? (
                <div className="text-center text-red-600 py-8">{error.message}</div>
            ) : (
                <div className="flex flex-wrap gap-4">
                    {filteredProducts.map((p) => (
                        <ProductCard  key={p.id} product={p} />
                    ))}
                </div>
            )}
        </Container>
    )
}
