const picksImages = import.meta.glob('/src/assets/picks-for-you/*.webp', {
    eager: true,
    import: 'default'
}) as Record<string, string>;

const images = Object.values(picksImages);
const productTitles: Array<string> = [
    'Isabel High-Rise Wide-Leg Scrub Pant Berry Spice', 
    'Catarina Scrub Top', 
    'Isabel High-Rise Wide-Leg Scrub Pant',
    'Kade Straight-Leg Scrub Pant',
    'Casma Scrub Top',
    'Kade Straight-Leg Scrub Pant',
    'Isabel High-Rise Wide-Leg Scrub Pant',
    'Salta Seamless Short-Sleeve Underscrub Black'
]
const productPrices: Array<string> = [
    '$42.99', '$38.99', '$29.99', '$42.99', '$38.99', '$35.99', '$39.99', '$42.99'
]
const picks: any[] = [];

images.forEach((image, index) => {
    picks.push({
        src: image,
        title: productTitles[index],
        price: productPrices[index]
    })
})

console.log("picksImages:", picksImages);
console.log("picks:", picks);

export default function PicksForYou() {
    return (
        <section className="mt-10 ps-4">
            <p className="text-[17px] font-bold mb-6">Picks for You</p>
            <div className="flex gap-4 overflow-scroll scrollbar-none">
                {picks.map((pick, index) => {
                    return (
                        <div key={"pick_container" + index} className="img-container">
                            <img src={pick.src} key={"pick" + index} alt="top picks for you" className="max-w-[359px] w-100 h-auto object-cover aspect-[calc(0.7435/1)]" />
                            <p className="mt-2 text-[13px] font-semibold">{pick.title}</p>
                            <p className="mt-2 text-[13px] font-semibold">{pick.price}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}