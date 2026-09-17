const colorCarousel = import.meta.glob('/src/assets/color-carousel/*.{webp, avif}', {
    eager: true,
    import: 'default'
}) as Record<string, string>;

const images = Object.values(colorCarousel);
const colors: any[] = [];

images.forEach((image) => {
    colors.push({
        name: image.split('/').pop().substring(0, image.split('/').pop().length - 5).replaceAll('-', ' '),
        src: image
    })
})

// console.log(colorCarousel)
// console.log(colors)

export default function ColorCarousel() {
    return (
        <div className="flex gap-[16px] mt-[24px] mx-auto px-[24px] max-w-[1200px] overflow-scroll scrollbar-none">
            {colors.map((color, index) => {
                return (
                    <div key={'color-container-' + color.name} className="flex flex-col gap-2 min-h-[200px]">
                        <img key={'name-' + index} src={color.src} alt={'Image for ' + color.name} className="object-cover min-w-[140px] min-h-[140px] rounded-[6px]" />
                        <p key={'color-' + color.name + index} className="text-[13px] uppercase font-semibold">{color.name}</p>
                    </div>
                )
            })} 
        </div>
    )
}