import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Layout/Layout';
import HomePage from '../../Pages/HomePage/homePage';
import ErrorPage from '../../Pages/errorPage/errorPage';
import DetailsPage from '../../Pages/DetailsPage/DetailsPage';

export const router = createBrowserRouter([
    {
        element: <Layout/>,
        children:[
            {
                path: "/",
                element: <HomePage/>,
            },
            {
                path: 'details/:id',
                element: <DetailsPage />,
            },
        ]
    }
]);
