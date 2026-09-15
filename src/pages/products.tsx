import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts, fetchCategories } from '../services/api'
import {
    Typography,
    CircularProgress,
    Container,
    Button,
} from '@mui/material';
import '../styles/products.css'

type Product = { 
    id: number
    name: string
    slug: string
    description?: string
    price: string
    imageUrl?: string
    categoryId: number
    category: {
        id: number
        name: string
        slug: number
    }
}

type Category = {
    id: number
    name: string
    slug: string
}

export default function Products() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

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
                            selectedCategory === category.slug ? 'contained' : 'outlined'
                        }
                        onClick={() => setSelectedCategory(category.slug)}
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
                    {products.map((p) => (
                        <div key={p.id} className="w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)] xl:w-[calc(25%-1rem)]">
                            {p.imageUrl? (
                                <img
                                    src={p.imageUrl}
                                    alt={p.name}
                                    className="object-cover h-[400px] md:h-[400px] w-fit"
                                />
                            ) : (
                                <div className="h-44 bg-gray-100 flex items-center justify-center">
                                    <Typography color="textSecondary">No image</Typography>
                                </div>
                            )}
                            <p>{p.name}</p>
                            <p>${p.price}</p>
                        </div>
                    ))}
                </div>
            )}
        </Container>
    )
}
