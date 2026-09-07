import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api'
import {
    Card, 
    CardMedia,
    CardContent,
    CardActions,
    Button,
    Typography,
    CircularProgress,
    Container,
    Grid,
} from '@mui/material';
import '../styles/products.css'

type Product = { 
    id: string
    title: string
    price: number
    image?: string
    description?: string
}

export default function Products() {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        let ignore = false;

        const loadProducts = async () => {
            setLoading(true);

            try {
                const data = await fetchProducts();
                if (!ignore) {
                    setProducts(data);
                    setError(null);
                }
            } catch (err) {
                if (!ignore) {
                    console.error(err);
                    setError('Failed to load products');
                }
            } finally {
                if (!ignore) {
                    setLoading(false);
                }
            }
        }

        loadProducts();

        return () => {
            ignore = true;
        };
    }, []);

    return (
        <Container className="py-8">
            <header className="mb-8">
                <Typography variant="h3" component="h1" gutterBottom>
                    Featured Products
                </Typography>
                <Typography variant="body1" color="textSecondary">
                    Browse our curated selection - built with React, Typescript, Material UI, and MSW for a seamless shopping experience!
                </Typography>
            </header>

            {loading ? (
                <div className="flex justify-center py-20">
                    <CircularProgress />
                </div>
            ) : error ? (
                <div className="text-center text-red-600 py-8">{error}</div>
            ) : (
                <div className="flex flex-wrap gap-4">
                    {products.map((p) => (
                        <div key={p.id} className="w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)] xl:w-[calc(25%-1rem)]">
                            {p.image? (
                                <img
                                    src={p.image}
                                    alt={p.name}
                                    className="object-cover h-[400px] md:h-[400px] w-fit"
                                />
                            ) : (
                                <div className="h-44 bg-gray-100 flex items-center justify-center">
                                    <Typography color="textSecondary">No image</Typography>
                                </div>
                            )}
                            <p>{p.name}</p>
                            <p>${p.price.toFixed(2)}</p>
                        </div>
                    ))}
                </div>
            )}
        </Container>
    )
}
