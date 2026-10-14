import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { MenuItem } from './MenuBar';

const links: string[] = [
  'All Scrubs', 'Scrub Tops', 'Scrbu Pants', 'Scrub Sets'
]

const highlightLinks: string[] = [
  'New Arrivals', 'Best Sellers', 'THE SET', 'Sale'
]

const MenuItemSx: object = {
    borderBottom: '1px solid transparent', 
    width: 'fit-content',
    '&:hover' : { 
        borderBottom: '1px solid #000000'
    }
}

type Props= {
    index: Number
}

export default function MenuGroup({ index }: Props) {
    return (
            <Box sx={{
                p: 3, 
                borderBottom: '1px solid #e5e5e5',
                display: 'flex',
                gap: '32px'
            }}>

            <div className="flex flex-col gap-3">
                <p className="text-[14px] font-bold tracking-[3px]">Highlights</p>
                {index === 0 ? (
                    <Link to="/products">
                        <MenuItem sx={MenuItemSx}>Women's Home</MenuItem>
                    </Link>
                ) : (
                    <Link to="/products">
                        <MenuItem sx={MenuItemSx}>Men's Home</MenuItem>
                    </Link>
                )}
                {highlightLinks.map((highlightLink, index) => (
                    <Link key={index} to="/products">
                        <MenuItem sx={MenuItemSx}>{highlightLink}</MenuItem>
                    </Link>
                ))}
            </div>
             <div className="flex flex-col gap-3">
                <p className="text-[14px] font-bold tracking-[3px]">Highlights</p>
                {links.map((link: string, index: number) => (
                    <Link to="/products" key={index} className="text-[12px]">
                        <MenuItem sx={MenuItemSx}>{link}</MenuItem>
                    </Link>
                ))}
            </div>
            </Box>

    )
}