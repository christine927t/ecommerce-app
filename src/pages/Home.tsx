import ColorCarousel from '../components/homepage/ColorCarousel'
import HeroBanner from '../components/homepage/HeroBanner'
import ShopByCategory from '../components/homepage/ShopByCategory';
import BestSellers from '../components/homepage/BestSellers';
import PicksForYou from '../components/homepage/PicksForYou';

export default function Home() {
    return (
        <>
            <ColorCarousel />
            <HeroBanner />
            <ShopByCategory />
            <BestSellers />
            <PicksForYou />
        </>
    )
}
