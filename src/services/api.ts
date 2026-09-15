const API_URL = 'http://localhost:3000'

export const fetchProducts = async () => {
    const response = await fetch(`${API_URL}/products`)

    if (!response.ok) {
        throw new Error('Failed to fetch products')
    }

    return response.json()
}

export const fetchCategories = async () => {
    const response = await fetch(`${API_URL}/categories`)

    if (!response.ok) {
        throw new Error('Failed to fetch categories')
    }

    return response.json()
}