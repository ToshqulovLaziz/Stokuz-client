import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { navbarData } from "../utils/navbar";

const Root = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route path = "/" element = {<Navigate to = "/home" />} /> 
                {
                    navbarData.map((nav) => (
                        <Route key = {nav.id} path = {nav.path} element = {<nav.element />} />
                    ))
                }
            </Routes>
        </React.Fragment>
    );
}

export default Root;