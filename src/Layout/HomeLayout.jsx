import React from 'react';
import Navbar from '../Components/common/NavBar';
import { Outlet } from 'react-router';
import Footer from '../Components/common/Footer';
import { ToastContainer } from 'react-toastify';

const HomeLayout = () => {
    return (
        <div>
            <div className="navBarContainer flex justify-center shadow-sm">
                <Navbar></Navbar>
            </div>
            <h1>Abu Syeed Abdullah</h1>
            <Outlet></Outlet>
            <div className="footerContainer flex justify-center">
                <Footer></Footer>
            </div>
            <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
        </div>
    );
};

export default HomeLayout;