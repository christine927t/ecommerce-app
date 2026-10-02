import { sizeOptions } from "../../constants/coreColors"

type Props = {
    value: string
    onChange: (size: string) => void
}

export default function SizeSelection({ value, onChange }: Props) {
    return (
        <>
            <p className="text-[12px] mb-4">
                { value ? (
                    <span className="font-semibold">Size: { value }</span>
                ) : (
                    <span className="font-semibold">Select a Size</span> 
                )}
            </p>
            <div className="flex flex-wrap gap-2">
                {sizeOptions.map((sizeOption, index) => (
                    <button 
                    key={index} 
                    type="button"
                    onClick={() => onChange(sizeOption)}
                    className={`w-[55px] h-[40px] border border-[#e6e6e6] rounded-[4px] flex items-center justify-center text-[11px] font-semibold hover:bg-[#f5f5f5] hover:cursor-pointer 
                            ${value === sizeOption ? 'border-black' : 'border-[#e6e6e6]'}
                        `}
                    >
                        {sizeOption}
                    </button>
                )
            )}
            </div>
        </>
    )
}