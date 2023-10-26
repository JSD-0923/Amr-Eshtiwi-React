import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { IconButton, InputBase, Paper, useTheme } from '@mui/material'
import React from 'react'
import './searchContainer.css'
import CustomSelect from '../select/select'

function SearchContainer() {
    const theme = useTheme();
    return (
        <div class="search-section">
            <Paper
                className='search-input'
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', backgroundColor:theme.palette.body.main }}
            >
                <IconButton sx={{ p: '10px' }} >
                    <SearchOutlinedIcon sx={{color:theme.palette.text.main}} />
                </IconButton>

                <InputBase
                    sx={{ ml: 1, flex: 1, backgroundColor:theme.palette.body.main , color: theme.palette.text.main}}
                    placeholder="Search the website..."

                />
            </Paper>


            <div class="select-container" style={{backgroundColor:theme.palette.body.main}}>
                <CustomSelect label={'Sort By:'} selectValues={['Title', 'Author']} />
            </div>
            <div class="select-container" style={{backgroundColor:theme.palette.body.main}}>
                <CustomSelect label={'Filter By:'} selectValues={['Title', 'Author']} />
            </div>
        </div>
    )
}

export default SearchContainer