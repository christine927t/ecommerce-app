import React from 'react';
import { useEffect } from 'react';
import ColorCarousel from '../components/homepage/ColorCarousel'
import HeroBanner from '../components/homepage/HeroBanner'
import ShopByCategory from '../components/homepage/ShopByCategory';
import BestSellers from '../components/homepage/BestSellers';
import PicksForYou from '../components/homepage/PicksForYou';
import AboutSite from '../components/homepage/AboutSite';

export default function Home() {
    const [openAboutSite, setOpenAboutSite] = React.useState(
        () => localStorage.getItem("aboutSite") !== "shown"
    );

    const closeAboutSite = () => {
        localStorage.setItem("aboutSite", "shown");
        setOpenAboutSite(false);
    }

    return (
        <>
            <ColorCarousel />
            <HeroBanner />
            <ShopByCategory />
            <BestSellers />
            <PicksForYou />
            <AboutSite openAboutSite={openAboutSite} onClose={closeAboutSite} />
        </>
    )
}
