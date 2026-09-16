export type Category = {
    id: number
    name: string
    slug: string
}

export type Product = {
    id: number
    name: string
    slug: string
    description?: string
    price: string
    imageUrl?: string
    categoryId: number
    category: Category
}