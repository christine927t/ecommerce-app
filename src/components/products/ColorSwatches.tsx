import { useState } from 'react';
import { coreColorsHex } from "../../constants/coreColors"
import { limitedEditionHex } from "../../constants/coreColors"
import Checkmark from "../../assets/checkmark"

export default function ColorSwatches(){
    //shuffle combined arrays randomly using Fisher-Yates algorithm
    function shuffle<T>(items: T[]): T[] {
        const result = [...items];

        for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * ( i + 1));
            [result[i], result[j]] = [result[j], result[i]]
        }

        return result;
    }

    const [randomizedSwatches] = useState(() => 
        shuffle([...coreColorsHex, ...limitedEditionHex])
    )

    return (
        <>
            <p className="text-[11px] text-[#707070] font-semibold mb-1">{randomizedSwatches[0].name}</p>
            <div className="flex flex-wrap gap-1">
                {randomizedSwatches.slice(0,4).map(({ hex, name }, index) => (
                    <div
                        key={`${name}-${index}`}
                        className={`flex items-center justify-center border size-[22px] rounded-full
                            ${ index === 0 ? 'border-black' : 'border-transparent'}
                        `}
                    >
                        <div 
                            className="size-[18px] rounded-full position-relative"
                            style={{ backgroundColor: hex }}
                        >
                            { index === 0 && (
                                <Checkmark size="1.175em" />
                            )}
                        </div>
                    </div>
                ))}
                <div className="flex items-center bg-[#e6e6e6] px-[6px] py-1 text-center rounded-[20px] ms-2 text-[10px]">
                    +28 MORE
                </div>
            </div>
            
        </>
    )
}