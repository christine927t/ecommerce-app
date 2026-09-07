import { rest } from 'msw'

export const handlers = [
  rest.get('/api/products', (req, res, ctx) => {
    return res(
      ctx.json([
        { 
          id: 'p1', 
          title: 'T‑Shirt', 
          price: 19.99, 
          image: 'https://placehold.co/400', 
          description: 'Comfortable tee' 
        },
        { 
          id: 'p2', 
          title: 'Sneakers', 
          price: 79.99, 
          image: 'https://placehold.co/400', 
          description: 'Running shoes' 
        },
        {
          id: 'p3',
          title: 'Denim Jacket',
          price: 99.99,
          image: 'https://placehold.co/400',
          description: 'Stylish denim jacket',
        },
      ])
    )
  }),
  rest.get('/api/products/:id', (req, res, ctx) => {
    const { id } = req.params
    return res(ctx.json({ 
      id, 
      title: `Product ${id}`, 
      price: 49.99, 
      description: 'Details...' 
    }))
  }),
]
