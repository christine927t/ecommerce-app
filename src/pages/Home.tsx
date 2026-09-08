import React, { useEffect, useState } from 'react';
import Banner from '../components/navbar/banner'
import Navbar from '../components/navbar/navbar'
import ColorCarousel from '../components/homepage/color-carousel'
import HeroBanner from '../components/homepage/hero-banner'

export default function Home() {
    return (
        <>
            <Banner />
            <Navbar />
            <ColorCarousel />
            <HeroBanner />
        </>
    )
}
