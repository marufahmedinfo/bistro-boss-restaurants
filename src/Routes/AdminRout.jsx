import React from 'react';
import useAdmin from '../hooks/useAdmin';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRout = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    if (loading || isAdminLoading) {
        return <progress className="progress w-56"></progress>;
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to={'/'} state={{ from: location }} replace></Navigate>;
};

export default AdminRout;