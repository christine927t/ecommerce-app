import * as React from 'react';
import ScrollButton from "../ScrollButton";
import { useEffect } from 'react';

const colorCarousel = import.meta.glob('/src/assets/color-carousel/*.{webp, avif}', {
    eager: true,
    import: 'default'
}) as Record<string, string>;

const colors = Object.entries(colorCarousel).map(([path, src])=> {
    const filename = path.split('/').pop() ?? '';
    const name = filename.replace(/\.(webp|avif)$/i, '');

    return {
        name: name.replaceAll('-', ' '),
        src
    }
})

export default function ColorCarousel() {
    const [scrollLeft, setScrollLeft] = React.useState(0)
    const [scrollWidth, setScrollWidth] = React.useState(0)
    const [clientWidth, setClientWidth] = React.useState(0)

    useEffect(() => {
        const container = document.getElementById('carousel-container')
        if (!container) return;

        const updateScrollLeft = () => setScrollLeft(container.scrollLeft);
        setScrollWidth(container.scrollWidth)
        setClientWidth(container.clientWidth)
        updateScrollLeft();
        
        container.addEventListener('scroll', updateScrollLeft, { passive: true});
        return () => container.removeEventListener('scroll', updateScrollLeft);
    }, [])

    return (
        <div className="relative">
            { scrollLeft > 0 && <ScrollButton direction="left" element="carousel-container" /> }
            <div id="carousel-container" className="flex gap-4 mt-6 mx-auto px-4 max-w-[1200px] overflow-scroll scrollbar-none">
                {colors.map((color, index) => {
                    return (
                        <div key={'color-container-' + color.name} className="flex flex-col gap-2 min-h-[200px]">
                            <img key={'name-' + index} src={color.src} alt={'Image for ' + color.name} className="object-cover min-w-[140px] min-h-[140px] rounded-[6px]" />
                            <p key={'color-' + color.name + index} className="text-[13px] uppercase font-semibold">{color.name}</p>
                        </div>
                    )
                })} 
            </div>
            { scrollLeft + clientWidth < scrollWidth && <ScrollButton direction="right" element="carousel-container" /> }
        </div>
    )
}