import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { MemoryRouter } from 'react-router-dom'

import ProductCard from './ProductCard'
import type { Product } from '../../types/product'

const testProduct: Product = {
    id: 1,
    name: 'Catarina Scrub Top',
    slug: 'catarina-scrub-top',
    description: 'A comfortable scrub top',
    price: '38.00',
    imageUrl: 'https://example.com/catarina.jpg',
    categoryId: 1,
    category: {
        id: 1,
        name: 'Womens',
        slug: 'womens',
    },
}

describe('ProductCard', () => {
    it('renders the product name', () => {
        render(
            <MemoryRouter>
                <ProductCard product={testProduct} />
            </MemoryRouter>
        )

        expect(
            screen.getByText('Catarina Scrub Top')
        ).toBeInTheDocument()
    })

    it('renders the product price', () => {
        render(
            <MemoryRouter>
                <ProductCard product={testProduct} />
            </MemoryRouter>
        )
        //use function because text of <p> tag is on two lines
        expect(screen.getByText((_, element) => element?.textContent === '$38.00')).toBeInTheDocument()
    })

    it('renders the product image', () => {
        render(
            <MemoryRouter>
                <ProductCard product={testProduct} />
            </MemoryRouter>
        )

        expect(
            screen.getByRole('img', { name: 'Catarina Scrub Top'})
        ).toBeInTheDocument()
    })

    it('links to the product page', () =>{ 
        render(
            <MemoryRouter>
                <ProductCard product={testProduct} />
            </MemoryRouter>
        )

        const link = screen.getByRole('link')

        expect(link).toHaveAttribute('href', '/products/catarina-scrub-top')
    })
})