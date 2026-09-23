import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { describe, expect, it, vi } from 'vitest'
import ProductDetails from './ProductDetails'
import type { Product } from '../types/product'

const product: Product = {
    id: 1,
    name: 'Catarina Scrub Top',
    slug: 'catarina-scrub-top',
    price: '38.00',
    imageUrl: 'https://example.com/catarina.jpg',
    categoryId: 1,
    category: {
        id: 1,
        name: 'Womens',
        slug: 'womens',
    },
}

vi.mock('../services/api', () => ({
    fetchProductBySlug: vi.fn()
}))

vi.mock('../components/productDetails/CoreColorsModal', () => ({
    default: ({ 
        open,
        onClose,
    } : { 
        open: boolean 
        onClose: () => void
    }) =>
        open ? (
            <div>
                <p>Color Gallery Modal</p>
                <button onClick={onClose}>Close</button>
            </div> 
        ): null
}))

import { fetchProductBySlug } from '../services/api'

const renderProductDetails = () => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
            }
        }
    })

    return render(
       <QueryClientProvider client={queryClient}>
            <MemoryRouter initialEntries={['/products/catarina-scrub-top']}>
                <Routes>
                    <Route
                        path="/products/:slug"
                        element={<ProductDetails />}
                    />
                </Routes>
            </MemoryRouter>
       </QueryClientProvider> 
    )
}

describe('ProductDetails', () => {
    it('renders the product details', async () =>{
        vi.mocked(fetchProductBySlug).mockResolvedValue(product)

        renderProductDetails()

        expect(
            await screen.findAllByText('Catarina Scrub Top')
        ).toHaveLength(2)

        expect(screen.getAllByText('$38.00')).toHaveLength(2)

        expect(
            screen.getByRole('img', { name: 'Image for Catarina Scrub Top'})
        ).toBeInTheDocument()
    })

    it('displays a loading message while the product is loading', () => {
        vi.mocked(fetchProductBySlug).mockReturnValue(
            //Pretend the API request is still happening forever.
            new Promise(() => {})
        )

        renderProductDetails()

        expect(screen.getByText('Loading...')).toBeInTheDocument()
    })

    it('displays a not found message when the product does not exist', async () => {
        vi.mocked(fetchProductBySlug).mockRejectedValue(
            new Error('Failed to fetch product: 404')
        )

        renderProductDetails()

        expect(
            await screen.findByText('Product not found.')
        ).toBeInTheDocument()
    })

    it('displays an error message when the product request fails', async () => {
        vi.mocked(fetchProductBySlug).mockRejectedValue(
            new Error('Failed to fetch product: 500')
        )

        renderProductDetails()

        expect(
            await screen.findByText('Failed to load product.')
        ).toBeInTheDocument()
    })

    it('opens the color gallery when the Color Gallery button is clicked', async () =>{
        vi.mocked(fetchProductBySlug).mockResolvedValue(product)

        renderProductDetails()

        const colorGalleryButton = await screen.findByRole('button', {
            name: 'Color Gallery'
        })

        expect(screen.queryByText('Color Gallery Modal')).not.toBeInTheDocument()

        await userEvent.click(colorGalleryButton)

        expect(screen.getByText('Color Gallery Modal')).toBeInTheDocument()
    })

    it('closes the color gallery when the close button is clicked', async () =>{
        vi.mocked(fetchProductBySlug).mockResolvedValue(product)

        renderProductDetails()

        const colorGalleryButton = await screen.findByRole('button', {
            name: 'Color Gallery'
        })

        await userEvent.click(colorGalleryButton)

        expect(screen.getByText('Color Gallery Modal')).toBeInTheDocument()

        await userEvent.click(
            screen.getByRole('button', { name: 'Close' })
        )

        expect(
            screen.queryByText('Color Gallery Modal')
        ).not.toBeInTheDocument()
    })
})