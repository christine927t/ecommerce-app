import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { FOOTER_LINKS_DATA } from '/src/constants/footerLinks.ts'

type FooterLinksMobileProps = {
    className?: string;
};

export default function FooterLinksMobile({ className }: FooterLinksMobileProps) {
  const id = React.useId();
  return (
    <>
        {FOOTER_LINKS_DATA.map((link, index) => {
            return (
                <div key={index} className={className}>
                    {link.details ? (
                    <Accordion
                        sx={{
                            backgroundColor: '#282828',
                            color: '#f1f1f1'
                        }}
                        
                    >
                        <AccordionSummary
                            expandIcon={<AddIcon sx={{ fill: '#ffffff', width: '20px' }} />}
                            aria-controls={`${id}-panel1-content`}
                            id={`${id}-panel1-header`}
                            sx={{borderTop: '1px solid #525252'}}
                        >
                        <Typography component="span" sx={{ fontSize: '11px' }}>{link.heading}</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ paddingLeft: '60px' }}>
                            {link.details?.map((detail, detailIndex) => {
                                return (
                                    <p key={detailIndex} className='text-sm py-2 font-extralight'>{detail}</p>
                                )
                            })}
                        </AccordionDetails>
                    </Accordion>
                    ) : ( 
                        <Typography 
                            component="p" 
                            sx={{ fontSize: '11px' }} 
                            key={'heading' + index} 
                            className="p-4 border-t-[2px] border-t-[#525252]"
                        
                        >
                            {link.heading}
                        </Typography>
                    )}
                </div>
            )
        })}
    </>
  );
}
