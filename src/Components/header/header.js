import './header.css'
import Btn from '../button/button';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useTheme } from '@mui/material';
import { useContext } from 'react';
import ThemeContext from '../../Context/ThemeContext';


function Header() {
    const theme = useTheme();
    const toggleTheme = useContext(ThemeContext)

    return (
        <header style={{backgroundColor: theme.palette.default.main}}>
            <h1 class="title" style={{color: theme.palette.primary.main}}>Web Topics</h1>
            <div class="buttons">
                <Btn name={'Dark Mode'} icon={<DarkModeOutlinedIcon sx={{color:theme.palette.text.main}} />} onClick={toggleTheme}/>
                <Btn name={'Favouites'} icon={<FavoriteBorderOutlinedIcon sx={{color:theme.palette.text.main}} />} />
            </div>
        </header>
    )
}

export default Header;