import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import Spinner from '../Components/Shared/Spinner/Spinner';

const PrivateRoute = ({children}) => {

    const {user, loader} = useContext(AuthContext);
    const location = useLocation();

    if(loader){
        return <div className='my-5 d-flex justify-content-center'>
            <Spinner></Spinner>
        </div>
    }
    if(user){
        return children;
    }
    return <Navigate to='/signin' state={{from: location}} replace />
};

export default PrivateRoute;