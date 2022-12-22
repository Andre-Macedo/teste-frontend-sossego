import React from "react";
import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom";
import "../styles/layout.css"

function Layout() {

    return (
        <div className="container">
            <h1>Criação de Usuário</h1>
            <NavBar />
            <Outlet />
        </div>
    )
}


export default Layout;