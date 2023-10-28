import React from 'react';
import './welcome.css';
import { useTheme } from '@mui/material';

function Welcome() {
    const theme = useTheme();

    return (
        <div class="greeting-section" style={{backgroundColor: theme.palette.default.main}}>
            <div class="triangles">
                <div class="triangle-1" ></div>
                <div class="triangle-2" style={{backgroundColor: theme.palette.secondary.main}}></div>
            </div>
            <div>
                <h1 class="Welcome" style={{color: theme.palette.secondary.main}}>Welcome to our website!</h1>
                <p class="welcome-paragraph" style={{color:theme.palette.text.main}}>We have a new design that's fresh, modern, and easy to use.</p>
            </div>
        </div>
    )
}

export default Welcome;