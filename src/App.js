import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage/homePage';
import Header from './header/header';
import Welcome from './welcome/welcome';
import { Button, CssBaseline, ThemeProvider, createTheme, useTheme } from '@mui/material';
import ErrorPage from './errorPage/errorPage';
import DetailsPage from './DetailsPage/DetailsPage';
import { useMemo, useState } from 'react';
import Btn from './button/button';
// import { useMemo, useState } from 'react';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        errorElement: <ErrorPage />
    },
    {
        path: 'details/:id',
        element: <DetailsPage />
    },
]);



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
        main:'#1A1A1A',
      },
      body: {
        main:'#282828',
      },
      text: {
        main:'#EDEDED',
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
        main:'#FFFFFF',
      },
      body: {
        main:'#F0F9FF',
      },
      text: {
        main:'#333333',
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
        <div className="App" style={{backgroundColor:theme.palette.body.main,}}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header toggleTheme={toggleTheme}/>
                <Welcome />
                <RouterProvider router={router} />
            </ThemeProvider>
        </div>
    );
}

export default App;
