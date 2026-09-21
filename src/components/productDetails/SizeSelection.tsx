import { sizeOptions } from "../../constants/coreColors"

export default function SizeSelection() {
    return (
        <>
            <p className="text-[12px] mb-4">
                {/* <span className="font-semibold">Size:</span>  */}
                <span className="font-semibold">Select a Size</span> 
            </p>
            <div className="flex flex-wrap gap-2">
                {sizeOptions.map((sizeOption, index) => (
                    <div key={index} className="w-[55px] h-[40px] border border-[#e6e6e6] rounded-[4px] flex items-center justify-center text-[11px] font-semibold hover:bg-[#f5f5f5] hover:cursor-pointer">
                        {sizeOption}
                    </div>
                )
            )}
            </div>
        </>
    )
}