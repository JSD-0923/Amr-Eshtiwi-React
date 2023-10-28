import React from 'react'
import Header from '../header/header'
import Welcome from '../welcome/welcome'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div className='page-layout'>
            <Header />
            <Welcome />
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default Layout