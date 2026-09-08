import { Link } from 'react-router-dom';

export default function ShopNowCTA() {
    return (
        <Link to="/products">
            <button className="text-xs font-medium bg-white text-black px-8 py-3 mb-8 mt-6 rounded-sm cursor-pointer hover:bg-[#f5f5f5]">
                SHOP NOW
            </button>
        </Link>
    )
}