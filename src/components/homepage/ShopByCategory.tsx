const shopByImages = import.meta.glob('/src/assets/shop-by-category/*.webp', {
    eager: true,
    import: 'default'
}) as Record<string, string>;

const categories = Object.entries(shopByImages).map(([path, src])=> {
    const filename = path.substring(48) ?? '';
    const name = filename.replace(/\.(webp|avif)$/i, '');

    return {
        name: name.replaceAll('_', ' '),
        src
    }
})

export default function ShopByCategory() {
    return (
        <section className="mt-[40px] px-4 max-w-[1600px] m-auto">
            <p className="text-[17px] font-semibold">PLUMS By Category</p>
            <div className="mt-[24px] grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
                {categories.map((category, index) => {
                    return (
                        <div key={'category-container-' + index} className="">
                            <img key={'category-' + index} src={category.src} alt={'Image for ' + category.name} className="object-cover rounded-md" />
                            <div className="mt-2"> 
                                <p className="text-sm uppercase" key={'category-name-' + index}>{category.name}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}