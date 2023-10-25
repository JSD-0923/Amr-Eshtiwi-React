import React from 'react';
import './button.css'
import Button from '@mui/material/Button';

const style = {
    marginLeft: '2px',
    border: '1px solid rgb(209, 209, 209)',
    color: 'black',
    background: 'none',
    fontWeight: 200,
    fontSize: '12px',
    textTransform:'none'
}

function Btn({name,icon}) {
    return (
        <Button size="small" variant="outlined" type="normal" startIcon={icon} sx={style}>
            {name}
        </Button>
    )
}

export default Btn