import React from 'react'
import './select.css'
import { FormControl, FormHelperText, MenuItem, Select, useTheme } from '@mui/material'

function CustomSelect({ label, selectValues,value ,handleChange}) {
    // const [value, setValue] = useState('');

    // const handleChange = (event) => {
    //     setValue(event.target.value);
    // }

    const theme = useTheme();
    return (

        <FormControl variant="standard" sx={{ width: '100%', backgroundColor: theme.palette.body.main, }}>
            <FormHelperText sx={{ color: theme.palette.text.main }}>{label}</FormHelperText>
            <Select
                value={value}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                sx={{ backgroundColor: theme.palette.body.main, color: theme.palette.text.main }}
            >
                <MenuItem value="" sx={{ backgroundColor: theme.palette.body.main, color: theme.palette.text.main }}>
                    <em>Defult</em>
                </MenuItem>
                {selectValues.map((value) => {
                    return (<MenuItem key={Math.random()} value={value} sx={{ backgroundColor: theme.palette.body.main, color: theme.palette.text.main }} >{value}</MenuItem>)
                })}
            </Select>
        </FormControl>
    )
}

export default CustomSelect