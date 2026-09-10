import React, { useEffect, useState } from 'react';
import Banner from '../components/navbar/banner'
import ColorCarousel from '../components/homepage/color-carousel'
import HeroBanner from '../components/homepage/hero-banner'
import ShopByCategory from '../components/homepage/shop-by-category';
import BestSellers from '../components/homepage/best-sellers';
import PicksForYou from '../components/homepage/picks-for-you';

export default function Home() {
    return (
        <>
            <Banner />
            <ColorCarousel />
            <HeroBanner />
            <ShopByCategory />
            <BestSellers />
            <PicksForYou />
        </>
    )
}
