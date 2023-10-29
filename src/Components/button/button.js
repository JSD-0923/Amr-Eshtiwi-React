import React from 'react';
import './button.css'
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material';



function Btn({name,icon,onClick, isFav}) {
    const theme = useTheme();

const style = {
    marginLeft: '2px',
    border: '1px solid rgb(209, 209, 209)',
    background: isFav ? theme.palette.secondary.main :'none',
    fontWeight: 200,
    fontSize: '12px',
    textTransform:'none',
    color:isFav ? '#000000' :theme.palette.text.main,
}
    return (
        <Button size="small" variant="outlined" type="normal" startIcon={icon} sx={style} onClick={onClick}>
            {name}
        </Button>
    )
}

export default Btn