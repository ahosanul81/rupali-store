import React from 'react';
import Navbar from '../Pages/Homepage/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
                <Outlet />
        </div>
    );
};

export default MainLayout;