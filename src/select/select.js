import React, { useState } from 'react'
import './select.css'
import { FormControl, FormHelperText, MenuItem, Select } from '@mui/material'

function CustomSelect({label,selectValues}) {
    const [value,setValue] =  useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }
    return (

        <FormControl variant="standard" sx={{width: '100%',}}>
            <FormHelperText>{label}</FormHelperText>
            <Select
                value={value}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
            >
                <MenuItem value="">
                    <em>Defult</em>
                </MenuItem>
                {selectValues.map((value) => {
                    return (<MenuItem value={value}>{value}</MenuItem>)
                })}
            </Select>
        </FormControl>
    )
}

export default CustomSelect