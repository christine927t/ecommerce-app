import { describe, it, expect, beforeEach } from 'vitest'
import { useCartStore } from './cartStore'
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

describe('cartStore', () => {
    beforeEach(() => {
        useCartStore.getState().clearCart()
    })

    it('adds an item to the cart', () => {
        useCartStore.getState().addItem({
            product,
            color: 'Moss',
            size: 'Small',
            quantity: 1
        })

        expect(useCartStore.getState().items).toEqual([
            {
                product,
                color: 'Moss',
                size: 'Small',
                quantity: 1
            }
        ])
    })

    it('increases the quantity when the same item is added again', () => {
        const { addItem } = useCartStore.getState()

        addItem({
            product,
            color: 'Moss',
            size: 'Small',
            quantity: 1
        })

        addItem({
            product,
            color: 'Moss',
            size: 'Small',
            quantity: 2
        })

        expect(useCartStore.getState().items).toHaveLength(1)
        expect(useCartStore.getState().items[0].quantity).toBe(3)
    })

    it('keeps different sizes as separate cart items', () => {
        const { addItem } = useCartStore.getState()

        addItem({
            product,
            color: 'Moss',
            size: 'Small',
            quantity: 1
        })

        addItem({
            product,
            color: 'Moss',
            size: 'Medium',
            quantity: 1
        })

        expect(useCartStore.getState().items).toHaveLength(2)
        expect(useCartStore.getState().items[0].size).toBe('Small')
        expect(useCartStore.getState().items[1].size).toBe('Medium')
    })

    it('keeps different colors as separate cart items', () => {
        const { addItem } = useCartStore.getState()

        addItem({
            product,
            color: 'Moss',
            size: 'Small',
            quantity: 1
        })

        addItem({
            product,
            color: 'Black',
            size: 'Small',
            quantity: 1
        })

        expect(useCartStore.getState().items).toHaveLength(2)
        expect(useCartStore.getState().items[0].color).toBe('Moss')
        expect(useCartStore.getState().items[1].color).toBe('Black')
    })
})