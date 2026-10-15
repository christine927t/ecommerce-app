import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

type Props = {
    direction: string,
    element: string
}

function scrollContainer(direction: string, element: string) {
    const colorContainer = document.getElementById(element)

    colorContainer?.scrollBy({
        left: direction === 'right' ? 300: -300,
        behavior: 'smooth'
    })
}

export default function ScrollButton({direction, element}: Props) {
    return (
        <button 
            type="button" 
            onClick={() => scrollContainer(direction, element)} 
            className={
                `absolute right-[11px] bottom-[107px] size-[42px] bg-white rounded-full flex justify-center items-center ` + 
                (direction === 'right' ? 'right-[11px] bottom-[107px]' : 'left-[11px] bottom-[107px]')
            }
        >
            { direction === "right" 
                ? <ArrowForwardIosIcon sx={{marginLeft: '3px'}} />
                : <ArrowBackIosIcon sx={{marginLeft: '7px'}} />
            }
        </button>
    )
}