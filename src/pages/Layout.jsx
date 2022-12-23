import React from "react";
import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom";
import "../styles/layout.scss"
import UserForm from "./UserForm";
import AddressForm from "./AdressForm";

function Layout() {

    return (
        <div className="container">
            <h1>Criação de Usuário</h1>
            <NavBar />
            <UserForm />
        </div>
    )
}


export default Layout;