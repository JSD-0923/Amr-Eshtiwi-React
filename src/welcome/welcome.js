import React from 'react';
import './welcome.css';

function Welcome() {
    return (
        <div class="greeting-section background-light">
            <div class="triangles">
                <div class="triangle-1"></div>
                <div class="triangle-2"></div>
            </div>
            <div>
                <h1 class="Welcome">Welcome to our website!</h1>
                <p class="welcome-paragraph text-light">We have a new design that's fresh, modern, and easy to use.</p>
            </div>
        </div>
    )
}

export default Welcome;