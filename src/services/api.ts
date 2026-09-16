import type { Product, Category } from '../types/product'

const API_URL = 'http://localhost:3000'

export const fetchProducts = async (): Promise<Product[]> => {
    const response = await fetch(`${API_URL}/products`)

    if (!response.ok) {
        throw new Error('Failed to fetch products')
    }

    return response.json()
}

export const fetchCategories = async (): Promise<Category[]> => {
    const response = await fetch(`${API_URL}/categories`)

    if (!response.ok) {
        throw new Error('Failed to fetch categories')
    }

    return response.json()
}

export const fetchProductBySlug = async (
    slug: string
): Promise<Product> => {
    const response = await fetch(`${API_URL}/products/slug/${slug}`)

    if (!response.ok) {
        throw new Error(`Failed to fetch product: ${response.status}`)
    }

    return response.json()
}