const shopByImages = import.meta.glob('/src/assets/shop-by-category/*.webp', {
    eager: true,
    import: 'default'
}) as Record<string, string>;

const images = Object.values(shopByImages);
const categories: any[] = [];

images.forEach((image) => {
    categories.push({
        name: image?.substring(48).replaceAll('_', ' ').replaceAll('.webp', ''),
        src: image
    })
})

// console.log("shopByImages:", shopByImages);
// console.log("categories:", categories);

export default function ShopByCategory() {
    return (
        <section className="mt-[40px] px-4">
            <p className="text-[17px] font-semibold">FIGS By Category</p>
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