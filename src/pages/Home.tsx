import React, { useEffect, useState } from 'react';
import Products from '../components/products'
import Banner from '../components/navbar/banner'
import Navbar from '../components/navbar/navbar'
import ColorCarousel from '../components/homepage/color-carousel'

export default function Home() {
    return (
        <>
            <Banner />
            <Navbar />
            <ColorCarousel />
            <Products />
        </>
    )
}
