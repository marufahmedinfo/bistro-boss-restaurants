import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Pages/Shared/Footer/Footer';
import Navbar from '../components/Pages/Shared/Navbar/Navbar';

const Main = () => {
    const location = useLocation();
    console.log(location)
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register');
    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}

            <div className='min-h-[calc(110vh-300px)]'>
                <Outlet></Outlet>
            </div>

        {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;