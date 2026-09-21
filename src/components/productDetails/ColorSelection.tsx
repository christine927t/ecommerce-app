import { coreColorsHex } from "../../constants/coreColors"
import { limitedEditionHex } from "../../constants/coreColors"
import styles from './ColorSelection.module.css'

console.log(coreColorsHex)
console.log(limitedEditionHex)

type Swatch = {
    name: string
    hex: string
}

type Props = {
    text: string
    swatches: Swatch[]
}

export default function ColorSelection({ text, swatches }: Props) {
    return (
        <div className="mt-2 mb-6">
            <div className="mb-2">
                <p className="text-[12px] mb-2">{text}</p>
                <div className="flex flex-wrap gap-1">
                    {swatches.map(({ hex, name }, index) => (
                        <div             
                            key={`${name}-${index}`}
                            className={`flex items-center justify-center border border-transparent size-[32px] rounded-full ${styles.swatch}`}
                        >
                            <div 
                                className="size-[26px] rounded-full"
                                style={{ backgroundColor: hex }}
                            >
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}