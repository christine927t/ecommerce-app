import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Banner from '/src/components/navbar/banner.tsx'
import Navbar from '/src/components/navbar/navbar.tsx'
import Footer from '/src/components/footer/footer.tsx'
import Products from './pages/products.tsx';
import ProductDetails from './pages/ProductDetails.tsx';

import "/src/App.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Banner />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}