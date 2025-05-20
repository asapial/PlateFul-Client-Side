import React, { useContext } from 'react';
import NavBar from './Components/NavBar';
import { Outlet } from 'react-router';
import Footer from './Components/Footer';
import { AuthContext } from './main';
import Loader from './Components/Loader';
import { ToastContainer } from 'react-toastify';
import Navbar from './src/Components/common/NavBar';
import LoadingSpinner from './src/Components/common/LoadingSpinner';

const Root = () => {
    // const {loading}=useContext(AuthContext);

    // if(loading){
    //     return <LoadingSpinner></LoadingSpinner>;
    // }
    return (
        <div>
            <div className="navBarContainer flex justify-center shadow-sm">
                <Navbar></Navbar>
            </div>
            {/* <h1>{email}</h1> */}
            <Outlet></Outlet>
            <div className="footerContainer flex justify-center">
                <Footer></Footer>
            </div>
            <ToastContainer
            position="top-right"
            autoClose={5000}
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

export default Root;