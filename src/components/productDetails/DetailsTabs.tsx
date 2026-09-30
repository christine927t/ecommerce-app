import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import DetailsTabDetails from './DetailsTabDetails';
import DetailsTabFit from './DetailsTabFit';
import DetailsTabFabric from './DetailsTabFabric';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      tabIndex={0}
      id={`detail-tabpanel-${index}`}
      aria-labelledby={`detail-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ mt: 2, fontSize: '13px' }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `detail-tab-${index}`,
    'aria-controls': `detail-tabpanel-${index}`,
  };
}

function tabSx(){
    return {
        fontSize: '11px',
        textTransform: 'none',
        color: '#525252',
        padding: '8px',
        borderRadius: '24px',
        width: '33.3%',
        '&.Mui-selected': {
            color: '#525252',
            border: '2px solid #e6e6e6'
        }
    }
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <Tabs 
            value={value} 
            onChange={handleChange} 
            aria-label="basic tabs example"
            sx={{ 
                backgroundColor: '#e6e6e6',
                borderRadius: '24px',
                '& .MuiTabs-indicator': {
                    'height': '0px',
                },
                '& .Mui-selected': {
                    'backgroundColor': '#ffffff',
                    'height': '100%',
                },
                '& .MuiTabs-list': {
                    height: '36.5px'
                },
                '&.MuiTabs-root': {
                    minHeight: '36.5px'
                },
                '& .MuiButtonBase-root': {
                    minHeight: '100%'
                }
            }}
        >
          <Tab label="Details" {...a11yProps(0)} sx={tabSx} />
          <Tab label="Fit" {...a11yProps(1)} sx={tabSx} />
          <Tab label="Fabric" {...a11yProps(2)} sx={tabSx} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <DetailsTabDetails />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <DetailsTabFit />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <DetailsTabFabric />   
      </CustomTabPanel>
    </Box>
  );
}