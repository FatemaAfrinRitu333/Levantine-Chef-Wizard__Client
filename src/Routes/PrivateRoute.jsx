import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoute = ({children}) => {

    const {user, loader} = useContext(AuthContext);
    const location = useLocation();
    console.log(location)

    if(loader){
        return <div>Loading . . . . </div>
    }
    if(user){
        return children;
    }
    return <Navigate to='/signin' state={{from: location}} replace />
};

export default PrivateRoute;