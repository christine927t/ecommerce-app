import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from '/src/components/navbar/navbar.tsx'
import Footer from '/src/components/footer/footer.tsx'
import Products from './pages/products.tsx';

import "/src/App.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}