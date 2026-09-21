import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from "@mui/material/Select";


export default function QuantitySelect() {
  const [qty, setQuantity] = React.useState('1');
  const quantities = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

  const handleChange = (event: SelectChangeEvent) => {
    setQuantity(event.target.value as string);
  };

  return (
     <FormControl sx={{ minWidth: 64 }}>
        <Select
          aria-describedby={`Qty-selector-helper-text`}
          value={qty}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Qty select' }}
          className="h-[50px]"
        >
            {quantities.map((quantity, index) => (
                <MenuItem key={index} value={quantity}>{quantity}</MenuItem>
            ))}
        </Select>
      </FormControl>
  );
}