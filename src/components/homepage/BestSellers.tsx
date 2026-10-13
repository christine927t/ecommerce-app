import { Link } from "react-router-dom";
import bestSellersImageDesktop from '../../assets/homepage/HP_Module_Desktop_theset_W_02.webp';
import bestSellersImageMobile from '../../assets/homepage/HP_Module_theset_W_592.webp';

export default function BestSellers() {
    return (
        <section className="flex flex-col md:flex-row mt-10 pb-12 text-center max-w-[1600px] m-auto">
            <div className="w-full lg:w-[60%] md:order-2">
                <div className="md:flex">
                    {/* <p className="hidden md:block font-bold text-[122px] rotate-90 md:w-fit md:h-[135px] text-nowrap mt-[204px] mr-[-225px] tracking-[2px]">THE SET</p> */}
                    <img src={bestSellersImageMobile} alt="Best sellers image" className="md:hidden w-full" />
                    <img src={bestSellersImageDesktop} alt="Best sellers image" className="hidden md:block w-full" />
                </div>
            </div>
            <div className="md:order-1 md:px-6 md:m-auto">
                <p className="text-[32px] font-bold mt-12 mb-8">BEST SELLERS</p>
                <p className="mb-4 font-extralight text-[14px] w-2/3 md:w-full lg:w-2/3 m-auto leading-7">The most Awesome to ever do it. Forever-favorite styles and silhouettes—appropriately hyped, undeniably iconic.</p>
                <Link to="/products" className="text-[13px] font-semibold pb-[4px] border-b">
                    SHOP NOW
                </Link>
            </div>
        </section>
    )
}
 