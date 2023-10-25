import React from 'react';
import './header.css'
import Btn from '../button/button';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

function Header() {
    return (
        <header class="background-light">
            <h1 class="title">Web Topics</h1>
            <div class="buttons">
                <Btn name={'Dark Mode'} icon={<DarkModeOutlinedIcon />} />
                <Btn name={'Favouites'} icon={<FavoriteBorderOutlinedIcon />} />
            </div>
        </header>
    )
}

export default Header;