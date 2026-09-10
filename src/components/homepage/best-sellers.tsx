import { Link } from "react-router-dom";

export default function BestSellers() {
    return (
        <section className="flex flex-col md:flex-row mt-10 pb-12 text-center">
            <img src={"/src/assets/homepage/HP_Module_theset_W_592.webp"} alt="Best sellers image" className="w-full md:order-2" />
            <div className="md:order-1 md:bg-[#e5e7ee]">
                <p className="text-[32px] font-bold mt-12 mb-8">BEST SELLERS</p>
                <p className="mb-4 font-extralight text-[14px] w-2/3 md:w-full m-auto leading-7">The most Awesome to ever do it. Forever-favorite styles and silhouettes—appropriately hyped, undeniably iconic.</p>
                <Link to="/products" className="text-[13px] font-semibold">
                    SHOP NOW
                </Link>
            </div>
        </section>
    )
}
 