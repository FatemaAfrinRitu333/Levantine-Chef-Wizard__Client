import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({children}) => {

    const {user, loader} = useContext(AuthContext);
    const location = useLocation();

    if(loader){
        return <>
            <Spinner animation="border" variant="warning" />
            <Spinner animation="border" variant="warning" />
            <Spinner animation="border" variant="warning" />
            <Spinner animation="border" variant="warning" />
            <Spinner animation="border" variant="warning" />
        </>
    }
    if(user){
        return children;
    }
    return <Navigate to='/signin' state={{from: location}} replace />
};

export default PrivateRoute;