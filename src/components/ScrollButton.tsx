import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

type Props = {
    direction: string,
    element: string
}

function scrollContainer(direction: string, element: string) {
    const colorContainer = document.getElementById(element)
    if (!colorContainer) return;

    if (element === 'carousel-container') {
        colorContainer.scrollBy({
            left: direction === 'right' ? 300: -300,
            behavior: 'smooth'
        })
    } else {
        colorContainer.scrollBy({
            left: direction === 'right' ? 500: -500,
            behavior: 'smooth'
        })
    }
}

export default function ScrollButton({direction, element}: Props) {
    return (
        <button 
            type="button" 
            onClick={() => scrollContainer(direction, element)} 
            className={
                `absolute cursor-pointer size-[42px] bg-white rounded-full flex justify-center items-center ` + 
                (direction === 'right' ? 'right-[11px] ' : 'left-[11px] ') +
                (element === 'carousel-container' ? 'bottom-[107px]' : 'bottom-[269px]')
            }
        >
            { direction === "right" 
                ? <ArrowForwardIosIcon sx={{marginLeft: '3px'}} />
                : <ArrowBackIosIcon sx={{marginLeft: '7px'}} />
            }
        </button>
    )
}