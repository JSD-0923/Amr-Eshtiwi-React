import { RouterProvider } from 'react-router-dom';
import './App.css';
import { CssBaseline, ThemeProvider, createTheme} from '@mui/material';
import {useState } from 'react';
import { router } from './Components/router/router';
import ThemeContext from './Context/ThemeContext';






const lightTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#0768AC',
        },
        secondary: {
            main: '#03C180',
        },
        default: {
            main: '#1A1A1A',
        },
        body: {
            main: '#282828',
        },
        text: {
            main: '#EDEDED',
        }
    },
});

const darkTheme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#0768AC',
        },
        secondary: {
            main: '#03C180',
        },
        default: {
            main: '#FFFFFF',
        },
        body: {
            main: '#F0F9FF',
        },
        text: {
            main: '#333333',
        }
    },
});

function App() {

    const [isDarkMode, setIsDarkMode] = useState(true);

    const theme = isDarkMode ? darkTheme : lightTheme;


    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <ThemeContext.Provider value={toggleTheme}>
            <div className="App" style={{ backgroundColor: theme.palette.body.main, }}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <RouterProvider router={router} />
                </ThemeProvider>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
