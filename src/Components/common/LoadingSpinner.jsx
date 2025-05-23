import Lottie from 'lottie-react';
import React from 'react';
import loading from '/src/assets/loadingBar.json';

const LoadingSpinner = () => {
    return (
        <div className=' flex justify-center items-center min-h-screen'>
            <Lottie animationData={loading} className='h-40'  />;
        </div>
    );
};

export default LoadingSpinner;