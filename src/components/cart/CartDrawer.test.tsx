import * as React from 'react';
import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import CartDrawer from './CartDrawer'
import { useCartStore } from '../../store/cartStore'
import userEvent from '@testing-library/user-event'

function CartDrawerWrapper() {
    const [cartOpen, setCartOpen] = React.useState(false);

    return (
        <CartDrawer
            cartOpen={cartOpen}
            onCartOpen={setCartOpen}
            onCartClose={setCartOpen}
        />
    )
}
const renderCartDrawer = () => render(<CartDrawerWrapper />)

describe('Cart', () => {
    beforeEach(() => {
        useCartStore.getState().clearCart()
    })

    it('displays a cart item', async () => {
        const user = userEvent.setup()

        useCartStore.getState().addItem({
            product: {
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
            },
            color: 'Moss',
            size: 'S',
            quantity: 2,
        })

        renderCartDrawer()

        await user.click(
            screen.getByTestId('shopping-bag-icon')
        )

        expect(
            screen.getByText('Catarina Scrub Top')
        ).toBeInTheDocument()

        expect(
            screen.getByText('S • Moss')
        ).toBeInTheDocument()

        // expect(
        //     screen.getByText('S')
        // ).toBeInTheDocument()

        expect(
            screen.getByRole('combobox', { name: 'Qty select' })
        ).toHaveTextContent('2')

        expect(
            screen.getByText('$38.00')
        ).toBeInTheDocument()
    })

    it('removes a cart item when the Remove button is clicked', async () => {
        const user = userEvent.setup()

        useCartStore.getState().addItem({
            product: {
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
            },
            color: 'Moss',
            size: 'S',
            quantity: 2,
        })

        renderCartDrawer()

        await user.click(
            screen.getByTestId('shopping-bag-icon')
        )

        expect(
            screen.getByText('Catarina Scrub Top')
        ).toBeInTheDocument()

        await user.click(
            screen.getByTestId('remove-item-icon')
        )

        expect(
            await screen.findByText('Your cart is empty.')
        ).toBeInTheDocument()
    })

    it('updates the quantity of a cart item', async () => {
        const user = userEvent.setup()

        useCartStore.getState().addItem({
            product: {
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
            },
            color: 'Moss',
            size: 'S',
            quantity: 2,
        })

        renderCartDrawer()

        await user.click(
            screen.getByTestId('shopping-bag-icon')
        )

        const quantitySelect = screen.getByRole('combobox', {
            name: 'Qty select'
        })

        await user.click(quantitySelect)

        await user.click(
            screen.getByRole('option', { name: '4' })
        )

        expect(quantitySelect).toHaveTextContent('4')

        expect(
            useCartStore.getState().items[0].quantity
        ).toBe(4)
    })

    it('calculates the cart subtotal', async () => {
        const user = userEvent.setup()

        useCartStore.getState().addItem({
            product: {
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
            },
            color: 'Moss',
            size: 'S',
            quantity: 2,
        })

        renderCartDrawer()

        await user.click(
            screen.getByTestId('shopping-bag-icon')
        )

        expect(
            screen.getByText('Subtotal:')
        ).toBeInTheDocument()

        expect(
            screen.getByText('$76.00')
        ).toBeInTheDocument()
    })

    it('sets the free-shipping progress width from the cart subtotal', async () => {
        const user = userEvent.setup()

        useCartStore.getState().addItem({
            product: {
                id: 1,
                name: 'Catarina Scrub Top',
                slug: 'catarina-scrub-top',
                price: '42.00',
                imageUrl: 'https://example.com/catarina.jpg',
                categoryId: 1,
                category: {
                    id: 1,
                    name: 'Womens',
                    slug: 'womens',
                },
            },
            color: 'Moss',
            size: 'S',
            quantity: 1,
        })

        renderCartDrawer()

        await user.click(
            screen.getByTestId('shopping-bag-icon')
        )

        const shippingMessage = screen.getByText('$8 more for Free Shipping!')
        const progressBar = shippingMessage.nextElementSibling?.firstElementChild

        expect(progressBar).toHaveStyle({ width: '84%' })
    })

    it('calculates the subtotal for multiple items in the cart', async () => {
        const user = userEvent.setup()

        useCartStore.getState().addItem({
            product: {
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
            },
            color: 'Moss',
            size: 'S',
            quantity: 2,
        })

        useCartStore.getState().addItem({
            product: {
                id: 2,
                name: 'Another Scrub Top',
                slug: 'another-scrub-top',
                price: '50.00',
                imageUrl: 'https://example.com/another.jpg',
                categoryId: 1,
                category: {
                    id: 1,
                    name: 'Womens',
                    slug: 'womens',
                },
            },
            color: 'Black',
            size: 'M',
            quantity: 1,
        })

        renderCartDrawer()

        await user.click(
            screen.getByTestId('shopping-bag-icon')
        )

        expect(
            screen.getByText('Subtotal:')
        ).toBeInTheDocument()

        expect(
            screen.getByText('$126.00')
        ).toBeInTheDocument()
    })

    it('opens the drawer and displays an empty cart message', async () => {
        const user = userEvent.setup()

        renderCartDrawer()

        await user.click(
            screen.getByTestId('shopping-bag-icon')
        )

        expect(
            screen.getByText('Your cart is empty.')
        ).toBeInTheDocument()
    })
})