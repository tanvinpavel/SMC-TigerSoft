import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <header className='border-b-2'>
                <Header/>
            </header>
            <main className="p-7 font-semibold flex-1 full-content-height overflow-y-auto">
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
};

export default Layout;