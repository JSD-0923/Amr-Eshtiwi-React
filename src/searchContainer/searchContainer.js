import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { IconButton, InputBase, Paper } from '@mui/material'
import React from 'react'
import './searchContainer.css'
import CustomSelect from '../select/select'

function SearchContainer() {
    return (
        <div class="search-section">
            <Paper
                className='search-input'
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', }}
            >
                <IconButton sx={{ p: '10px' }} >
                    <SearchOutlinedIcon />
                </IconButton>

                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search the website..."

                />
            </Paper>


            <div class="select-container">
                <CustomSelect label={'Sort By:'} selectValues={['Title', 'Author']} />
            </div>
            <div class="select-container">
                <CustomSelect label={'Filter By:'} selectValues={['Title', 'Author']} />
            </div>
        </div>
    )
}

export default SearchContainer