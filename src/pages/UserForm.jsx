import React from "react";
import "../styles/userform.scss"

import { Input } from "../components/Input";

function UserForm() {

    return (
        <form>
            <Input label="Nome" inputType="text" inputName="Nome" />
            <div className="bottomdiv">
                <Input label="Senha" inputType="password" inputName="Senha" />
                <Input label="Confirmar senha" inputType="password" inputName="Confirmar senha" />
            </div>
            <div className="bottomdiv">
                <Input label="Email" inputType="email" inputName="Email" />
                <label>
                    Data de Nascimento
                    <input
                        type="text"
                        onChange={(e) => console.log(e.target.value)}
                        onFocus={(e) => (e.target.type = "date")}
                        onBlur={(e) => (e.target.type = "text")}
                    />
                </label>
            </div>
            <div className="buttons">
                <Input inputType="button" value="Próximo Passo" />
            </div>
        </form>
    )
}


export default UserForm;