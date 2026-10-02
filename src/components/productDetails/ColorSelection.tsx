import styles from './ColorSelection.module.css'
import Checkmark from '../../assets/checkmark.tsx'

type Swatch = {
    name: string
    hex: string
}

type Props = {
    text: string
    swatches: Swatch[]
    value: string
    onChange: (color: string) => void
}

export default function ColorSelection({ text, swatches, value, onChange }: Props) {
    return (
        <div className="mt-2 mb-6">
            <div className="mb-2">
                <p className="text-[12px] mb-2">{text}</p>
                <div className="flex flex-wrap gap-1">
                    {swatches.map(({ hex, name }, index) => (
                        <button  
                            role="button"           
                            key={`${name}-${index}`}
                            aria-label={name}
                            onClick={() => onChange(name)}
                            className={`flex items-center justify-center border size-[32px] rounded-full ${styles.swatch}
                                ${ value === name ? 'border-black' : 'border-transparent'}
                            `}
                        >
                            <div 
                                className="size-[26px] rounded-full position-relative"
                                style={{ backgroundColor: hex }}
                            >
                                { value === name && (
                                    <Checkmark />
                                )}
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}