export default function DetailsTabFabric() {
   return (
        <div className="flex flex-col gap-2 font-[13px]">
            <p><span className="font-semibold">FIONx™ fabric:</span> Lightweight, breathable, and ridiculously soft, with moisture-wicking and super durable four-way stretch properties.</p>
            <p><span className="font-semibold">Silvadur™ antimicrobial technology:</span> Provides odor protection, inhibits bacteria growth, and extends product lifespan.</p>
            <>
                <p className="font-semibold">Materials</p>
                <ul className="list-disc list-inside">
                    <li className="ps-[11px] mb-3">72% Polyester</li>
                    <li className="ps-[11px] mb-3">21% Rayon</li>
                    <li className="ps-[11px] mb-3">7% Spandex</li>
                </ul>
            </>
            <>
                <p className="font-semibold">Care</p>
                <ul className="list-disc list-inside">
                    <li className="ps-[11px] mb-3">Wash cold, inside-out</li>
                    <li className="ps-[11px] mb-3">Tumble dry low</li>
                </ul>
            </>
        </div>
   ) 
}