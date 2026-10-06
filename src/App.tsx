import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Banner from '/src/components/navbar/Banner.tsx'
import Navbar from '/src/components/navbar/Navbar.tsx'
import Footer from '/src/components/footer/Footer.tsx'
import Products from './pages/Products.tsx';
import ProductDetails from './pages/ProductDetails.tsx';

import "/src/App.css";

export default function App() {
  const [cartOpen, setCartOpen] = React.useState(false);
  return (
    <>
      <BrowserRouter>
        <Banner />
        <Navbar 
          cartOpen={cartOpen} 
          onCartOpen={() => setCartOpen(true)} 
          onCartClose={() => setCartOpen(false)} 
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetails onViewBag={() => setCartOpen(true)} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}