import React from 'react';
import Navbar from './src/Components/common/NavBar';
import { Outlet } from 'react-router';
import Footer from './src/Components/common/Footer';
import { ToastContainer } from 'react-toastify';


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