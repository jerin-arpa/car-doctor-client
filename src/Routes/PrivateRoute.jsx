import { useContext } from "react";
import PropTypes from 'prop-types';
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        <progress className="progress w-56"></progress>
    }

    if (user?.email) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login" replace></Navigate>;
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoute;