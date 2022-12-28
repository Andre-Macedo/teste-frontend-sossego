import React from "react";

import IdIcon from "../assets/userIdIcon.svg"
import IdIconVerde from "../assets/userIdIconGreen.svg";

import AddressIcon from "../assets/userAddressIcon.svg";
import AddressIconVerde from "../assets/userAddressIconGreen.svg"
import AddressIconRoxo from "../assets/userAddressIconPurple.svg"

import AboutIcon from "../assets/userAboutIcon.svg";
import AboutIconRoxo from "../assets/userAboutIconPurple.svg"
import "../styles/navbar.scss";


function NavBar(props) {
    const { imgId, imgEndereco, imgAbout } = props;

    let iconeIdentificacao, iconeEndereco, iconeAbout

    switch (imgId) {
        case "verde":
            iconeIdentificacao = IdIconVerde;
            break
        default:
            iconeIdentificacao = IdIcon;
    }

    switch (imgEndereco) {
        case "verde":
            iconeEndereco = AddressIconVerde;
            break
        case "roxo":
            iconeEndereco = AddressIconRoxo;
            break
        default:
            iconeEndereco = AddressIcon;
    }

    switch (imgAbout) {
        case "roxo":
            iconeAbout = AboutIconRoxo;
            break
        default:
            iconeAbout = AboutIcon
    }

    return (
        <div className="steps_bar">
            <div className="step">
                <div className="img_background">
                    <img src={iconeIdentificacao} alt="Identificação do Usuário" />
                </div>
                <p>Identificação do Usúario</p>
            </div>
            <div className="step">
                <div className="img_background">
                    <img src={iconeEndereco} alt="Identificação do Usuário" />
                </div>
                <p>Endereço do Usuário</p>
            </div>
            <div className="step">
                <div className="img_background">
                    <img src={iconeAbout} alt="Identificação do Usuário" />
                </div>
                <p>Sobre você</p>
            </div>
        </div>
    )
}


export default NavBar;