import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';

const MainLayout = () => {

    return (

        <div className='lg:w-[1200px] mx-auto'>

            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster></Toaster>
            {/* footer here */}
        </div>
        
    );
};

export default MainLayout;