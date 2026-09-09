import heroGifMobile from "/src/assets/homepage/Mobile-Hero-W-1.gif"
import heroGifDesktop from "/src/assets/homepage/Desktop_Hero_W_1.webp"
import ShopNowCTA from "./shop-now-cta"

export default function HeroBanner() {
    return (
        <div className="hero-banner relative">
            <img src={heroGifMobile} alt="Hero Banner" className="w-full h-auto md:hidden" />
            <img src={heroGifDesktop} alt="Hero Banner" className="w-full h-auto hidden md:block" />
            <div className="absolute inset-x-0 bottom-[80px] text-center text-white md:w-[50%] md:ml-auto">
                <p className="font-semibold text-[32px] md:text-[40px] pb-2 md:mb-8">BEST SELLERS</p>
                <p className="px-8 leading-7">The most Awesome to ever do it. Forever-favorite styles and silhouettes—appropriately hyped, undeniably iconic.</p>
                <ShopNowCTA />
            </div>
        </div>
    )
}