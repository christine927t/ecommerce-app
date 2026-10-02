import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from "@mui/material/Select";

type Props = {
  value: number
  onChange: (quantity: number) => void
}

export default function QuantitySelect({ value, onChange }: Props) {
  const quantities = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

  const handleChange = (event: SelectChangeEvent) => {
    onChange(Number(event.target.value))
  };

  return (
     <FormControl sx={{ minWidth: 64 }}>
        <Select
          aria-describedby={`Qty-selector-helper-text`}
          value={String(value)}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Qty select' }}
          className="h-[50px]"
          sx={{
              '&:MuiOutlinedInput-notchedOutline': {
                borderColor: '#e6e6e6'
              }
          }}
        >
            {quantities.map((quantity, index) => (
                <MenuItem key={index} value={quantity}>{quantity}</MenuItem>
            ))}
        </Select>
      </FormControl>
  );
}