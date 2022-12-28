import React from "react";
import "../styles/userinfo.scss"

const UserInfo = (props) => {
    const { cep } = props;
    const formattedCep = `${cep.substring(0, 5)}-${cep.substring(5, 8)}`;
    return (
        <div className="userInfo_container">
            <h1> Usuário Criado!</h1>
            <div className="userInfo_item">
                <p>Nome: </p>
                <h3>{props.name}</h3>
            </div>
            <div className="userInfo_item">
                <p>Email: </p>
                <h3>{props.email}</h3>
            </div>
            <div className="line"></div>
            <div className="rowRuaNumero">

                <div className="userInfo_item">
                    <p>Rua:</p>
                    <h3>{props.rua}</h3>
                </div>
                <div className="userInfo_item">
                    <p>Número: </p>
                    <h3>{props.numero}</h3>

                </div>
            </div>
            <div className="userInfo_item">
                <p>CEP: </p>
                <h3>{formattedCep}</h3>
            </div>

            <button className="button_userInfo" type="submit" onClick={() => {
                props.cleanForm.setEndereco({});
                props.cleanForm.setIdentificacao({});
                props.cleanForm.setAbout("");
                props.setCurrentPage(1)
            }}>Novo Usuário</button>

        </div >
    );
};

export default UserInfo; 