import './header.css'
import Btn from '../button/button';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useTheme } from '@mui/material';


function Header({toggleTheme}) {
    const theme = useTheme();

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