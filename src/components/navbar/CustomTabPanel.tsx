import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const links: string[] = [
  'Scrubs', 'Outerwear and Underscrubs', 'Footwear and Socks', 'Accessories', 'Gift Cards', 'Group Orders', 'Students', 'Refer a Friend', 'About PLUMS', 'Account'
]

const highlightLinks: string[] = [
  'New Arrivals', 'Best Sellers', 'THE SET', 'Sale'
]

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  onCloseDrawer: () => void;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      tabIndex={0}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && 
      <Box sx={{ borderBottom: '1px solid #e5e5e5' }}>
        {children}
      </Box>}
    </div>
  );
}

export default function CustomTabPanel({ index, value, onCloseDrawer }: TabPanelProps) {
    return (
        <TabPanel value={value} index={index} onCloseDrawer={onCloseDrawer}>
            <Box sx={{ 
                py: 4, 
                px: 2, 
                borderBottom: '1px solid #e5e5e5'
            }}>
                <div className="flex flex-col gap-2">
                    <p className="text-[15px] font-bold tracking-[3px]">Highlights</p>
                    {index === 0 ? (
                        <Link to="/products" onClick={onCloseDrawer} className="text-[14px] font-light py-1">Women's Home</Link>
                    ) : (
                        <Link to="/products" onClick={onCloseDrawer} className="text-[14px] font-light py-1">Men's Home</Link>
                    )}
                    {highlightLinks.map((highlightLink, index) => (
                    <Link key={index} to="/products" onClick={onCloseDrawer} className="text-[14px] font-light py-1">{highlightLink}</Link>
                    ))}
                </div>
            </Box>
            <div className="flex flex-col">
                {links.map((link: string, index: number) => (
                    <Link to="/products" key={index} onClick={onCloseDrawer} className="text-[15px] font-bold tracking-[3px] px-4 py-4 border-b border-[#e5e5e5]">{link}</Link>
                ))}
            </div>
        </TabPanel>

    )
}