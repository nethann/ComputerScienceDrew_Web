import { Navigate, Outlet } from "react-router-dom";
import React from "react";

function PrivateRoute () {
    let isLogged = JSON.parse(localStorage.getItem("Authenticated"))
    return (isLogged ? <Outlet /> : <Navigate to="/developerLogin" />)
}

export default PrivateRoute;