const cloudinaryBaseUrl = import.meta.env.VITE_CLOUDINARY_URL;

export default function DetailsTabDetails(){
    return (
        <>
            <p>Modern design details AND super functional features? Whoa. The Rafaela™ has a mandarin collar and shirttail hem, multiple pockets, and an oversized fit. For a more classic fit, we recommend sizing down.</p>
            <br/>
            <p className="mb-3">Select colors also available in maternity</p>
            <ul className="list-disc list-inside">
                <li className="ps-[11px] mb-3">One hidden interior security pocket</li>
                <li className="ps-[11px] mb-3">Two deep welt hand pockets</li>
                <li className="ps-[11px] mb-3">Mandarin collar with hidden one-button placket</li>
                <li className="ps-[11px] mb-3">Back yoke with box pleat</li>
                <li className="ps-[11px] mb-3">Draped drop-shoulder silhouette</li>
                <li className="ps-[11px] mb-3">Shirttail hem</li>
                <li className="ps-[11px] mb-3">Engineered with Technical Comfort</li>
                <li className="ps-[11px] mb-3">All of our scrubs are named after places we've donated scrubs and people we've met along the way!</li>
            </ul>
            <div className="flex items-center gap-2 mt-4 mb-3">
                <img src={`${cloudinaryBaseUrl}/icon-oversizedfit.webp`} className='object-fit size-[20px]'/>
                <p className="font-semibold">Oversized Fit</p>
            </div>
            <div className="flex items-center gap-2 mt-2 mb-3">
                <img src={`${cloudinaryBaseUrl}/icon-pocket.webp`} className='object-fit size-[20px]'/>
                <p className="font-semibold">3 Pockets</p>
            </div>
            <div className="flex items-center gap-2 mt-2 mb-3">
                <img src={`${cloudinaryBaseUrl}/icon-supersoft.webp`} className='object-fit size-[20px]'/>
                <p className="font-semibold">Ridiculously Soft</p>
            </div>
            <div className="flex items-center gap-2 mt-2 mb-3">
                <img src={`${cloudinaryBaseUrl}/icon-antiwrinkle.webp`} className='object-fit size-[20px]'/>
                <p className="font-semibold">Anti-Wrinkle</p>
            </div>
        </>
    )
}