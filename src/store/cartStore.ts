import { create } from 'zustand'
import type { Product } from '../types/product'

export type CartItem = {
    product: Product
    color: string
    size: string
    quantity: number
}

type CartStore = {
    items: CartItem[]
    addItem: (item: CartItem) => void
    removeItem: (productId: number, color: string, size: string) => void
    updateQuantity: (
        productId: number,
        color: string,
        size: string,
        quantity: number
    ) => void
    clearCart: () => void
}

export const useCartStore = create<CartStore>((set) => ({
    items: [],
    
    addItem: (item) =>
        set((state) => {
            const existingItem = state.items.find(
                (existing) =>
                    existing.product.id === item.product.id &&
                    existing.color === item.color &&
                    existing.size === item.size
            )

            if (existingItem) {
                return {
                    items: state.items.map((existing) => 
                        existing === existingItem
                            ? {
                                ...existing,
                                quantity: existing.quantity + item.quantity
                            } : existing
                    )
                }
            }

            return {
                items: [...state.items, item],
            }
        }),

    removeItem: (productId, color, size) =>
        set((state) => ({
            items: state.items.filter(
                (item) =>
                    !(
                        item.product.id === productId &&
                        item.color === color &&
                        item.size === size
                    )
            )
        })),
    
    updateQuantity: (productId, color, size, quantity) =>
        set((state) => ({
            items: state.items.map((item) =>
                item.product.id === productId &&
                item.color === color &&
                item.size === size
                    ? { ...item, quantity }
                    : item
            ),
        })),

    clearCart: () => set({ items: [] })
}))