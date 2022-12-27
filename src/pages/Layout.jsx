
import React from "react";
import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom";
import Form from "./Form";
import "../styles/layout.scss"
import UserForm from "./UserForm";
import AddressForm from "./AdressForm";
import AboutForm from "./AboutForm";

function Layout() {

    return (
        <div className="container">
            <h1>Criação de Usuário</h1>
            <NavBar />
            <Form />
        </div>
    )
}


export default Layout;