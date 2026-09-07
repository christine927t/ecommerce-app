import React, { useEffect, useState } from 'react';
import Products from '../components/Products'
import Navbar from '../components/Navbar'
import ColorCarousel from '../components/ColorCarousel'

export default function Home() {
    return (
        <>
            <Navbar />
            <ColorCarousel />

            <Products />
        </>
    )
}
