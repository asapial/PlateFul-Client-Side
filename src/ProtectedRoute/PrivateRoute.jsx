import React, { useContext } from 'react';
import { AuthContext } from '../main';
import LoadingSpinner from '../Components/common/LoadingSpinner';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }

    if(!user)
    {
        return <Navigate state={location.pathname} to={'/login'}></Navigate>
    }
    return children;
};

export default PrivateRoute;