import React from "react";
import IdIcon from "../assets/userIdIcon.svg"
import AddressIcon from "../assets/userAddressIcon.svg";
import AboutIcon from "../assets/userAboutIcon.svg";
import "../styles/navbar.scss";

function NavBar() {

    return (
        <div className="steps_bar">
            <div className="step">
                <div className="img_background">
                    <img src={IdIcon} alt="Identificação do Usuário" />
                </div>
                <p>Identificação do Usúario</p>
            </div>
            <div className="step">
                <div className="img_background">
                    <img src={AddressIcon} alt="Identificação do Usuário" />
                </div>
                <p>Endereço do Usuário</p>
            </div>
            <div className="step">
                <div className="img_background">
                    <img src={AboutIcon} alt="Identificação do Usuário" />
                </div>
                <p>Sobre você</p>
            </div>
        </div>
    )
}


export default NavBar;