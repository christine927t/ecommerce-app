import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from '/src/components/navbar/navbar'
import Footer from '/src/components/Footer'
import Products from './pages/Products';

import "/src/App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}