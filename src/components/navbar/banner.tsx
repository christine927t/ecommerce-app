import "../../styles/navbar/banner.css"
import { useState } from "react";

export default function Banner() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="banner h-[30px] md:h-[40px] px-4 text-white text-[10px] md:text-[13px] w-100% flex items-center justify-between">
            <p className="text-center ms-auto">FREE SHIPPING FOR $50+ ORDERS AND FREE RETURNS</p>
            <button onClick={() => setIsVisible(false)} aria-label="Close banner" className="ms-auto cursor-pointer">
                <svg height="10px" width="10px" viewBox="0 0 10 10" aria-label="close"><g stroke="currentColor" stroke-width="1.1"><path d="M8.695 1.095l-7.6 7.6" stroke-width="1.1"></path><path d="M8.695 8.695l-7.6-7.6" stroke-width="1.1"></path></g></svg>
            </button>
        </div>
    )
}