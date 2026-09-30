import { describe, it, expect, vi, beforeEach } from 'vitest'
import {
    fetchProducts,
    fetchCategories,
    fetchProductBySlug,
} from './api'

describe('API services', () => {
    beforeEach(() => {
        vi.restoreAllMocks()
    })

    it('fetches products', async () => {
        const products = [
            {
                id: 1,
                name: 'Catarina Scrub Top'
            }
        ]

        vi.spyOn(globalThis, 'fetch').mockResolvedValue(
            new Response(JSON.stringify(products), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        )

        const result = await fetchProducts()

        expect(result).toEqual(products)
        expect(fetch).toHaveBeenCalledWith(
            'http://localhost:3000/products'
        )
    })

    it('fetches categories', async () => {
        const categories = [
            {
                id: 1,
                name: 'Womens',
                slug: 'womens'
            }
        ]

        vi.spyOn(globalThis, 'fetch').mockResolvedValue(
            new Response(JSON.stringify(categories), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        )

        const result = await fetchCategories()

        expect(result).toEqual(categories)
        expect(fetch).toHaveBeenCalledWith(
            'http://localhost:3000/categories'
        )
    })

    it('fetches a product by slug', async () => {
        const product = {
            id: 1,
            name: 'Catarina Scrub Top',
            slug: 'catarina-scrub-top',
            price: '38.00'
        }

        vi.spyOn(globalThis, 'fetch').mockResolvedValue(
            new Response(JSON.stringify(product), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        )

        const result = await fetchProductBySlug('catarina-scrub-top')

        expect(result).toEqual(product)
        expect(fetch).toHaveBeenCalledWith(
            'http://localhost:3000/products/slug/catarina-scrub-top'
        )
    })

    it('throws an error when fetch products fails', async () => {
        vi.spyOn(globalThis, 'fetch').mockResolvedValue(
            new Response(null, {
                status: 500
            })
        )

        await expect(fetchProducts()).rejects.toThrow(
            'Failed to fetch products'
        )
    })

    it('throws an error when fetching categories fails', async () => {
        vi.spyOn(globalThis, 'fetch').mockResolvedValue(
            new Response(null, {
                status: 500
            })
        )

        await expect(fetchCategories()).rejects.toThrow(
            'Failed to fetch categories'
        )
    })

    it('throws an error when fetching a product by slug fails', async () => {
        vi.spyOn(globalThis, 'fetch').mockResolvedValue(
            new Response(null, {
                status: 404
            })
        )

        await expect(fetchProductBySlug('catarina-scrub-top')).rejects.toThrow(
            'Failed to fetch product: 404'
        )
    })
})