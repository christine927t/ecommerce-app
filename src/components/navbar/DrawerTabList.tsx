import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CustomTabPanel from './CustomTabPanel';

type DrawerListProps = {
  onCloseDrawer: () => void;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function tabSx(){
  return { 
      fontWeight: 'bold',
      fontSize: '1rem',
      textTransform: 'none',
      '&.Mui-selected': {
          color: '#282828',
      }
  }
}

export default function BasicTabs({ onCloseDrawer }: DrawerListProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', paddingLeft: '1rem', height: '60px' }}>
        <Tabs 
            value={value} 
            onChange={handleChange} 
            aria-label="basic tabs example" 
            sx={{ 
              height: '100%',
              '& .MuiTabs-indicator': {
                  'backgroundColor': '#282828',
                  'height': '5px'
              },
              '& .MuiTabs-list': {
                height: '100%'
              }
            }}
        >
            <Tab 
                label="Women" 
                {...a11yProps(0)} 
                sx={tabSx}
            />
            <Tab 
                label="Men" 
                {...a11yProps(1)} 
                sx={tabSx}
            />        
          </Tabs>
      </Box>
      <CustomTabPanel index={0} value={value} onCloseDrawer={onCloseDrawer} />
      <CustomTabPanel index={1} value={value} onCloseDrawer={onCloseDrawer}  />
    </Box>
  );
}
