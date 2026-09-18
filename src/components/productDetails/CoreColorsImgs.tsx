const cloudinaryBaseUrl = import.meta.env.VITE_CLOUDINARY_URL;

type ColorImg = {
    name: string;
    src: string;
}

type Props = { colors: ColorImg[] };

export default function ColorsImgs({ colors }: Props) {
    return(
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-2 md:gap-y-4 pb-4">
            <>
            {colors.map((coreColor: ColorImg, coreIndex: number) => (
                <div key={`'color container:' + ${coreIndex}`}>
                    <img key={coreIndex} src={`${cloudinaryBaseUrl}${coreColor.src}`} className={'object-fit w-100'}/>
                    <p key={`'color name:' + ${coreIndex}`} className="text-center capitalize pt-2">{coreColor.name}</p>
                </div>
            ))}
            </>
        </div>
    )
}