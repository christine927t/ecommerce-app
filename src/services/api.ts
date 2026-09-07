import axios from 'axios'
export const api = axios.create({ baseURL: '/' })
export const fetchProducts = () => 
    axios.get('https://jsonfakery.com/products/random/50')
    .then(res => res.data)

//get individual product data for PDP
// export const fetchProduct = (id: string) => 
//     axios.get(`https://dummyjson.com/products(${id})`).then(res => res.data)
