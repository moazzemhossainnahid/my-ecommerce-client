import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loader from './Loader';


const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return <Loader/>;
    };

    if (!user) {
        signOut(auth);
        return <Navigate to='/signin' state={{ from: location }} replace />;
    };


    return children;
};

export default RequireAuth;