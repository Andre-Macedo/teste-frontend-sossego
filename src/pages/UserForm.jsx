import React from "react";
import "../styles/userform.scss"

function UserForm() {

    return (
        <form>

            <label> Nome
                <input
                    type="text"
                    name="nome"
                />
            </label>
            <div className="bottomdiv">
                <label>
                    Senha
                    <input
                        type="password"
                        name="senha"
                    />
                </label>
                <label>
                    Confirmar Senha
                    <input
                        type="password"
                        name="confirmar senha"
                    />
                </label>
            </div>
            <div className="bottomdiv">
                <label>
                    Email
                    <input
                        type="email"
                        name="email"
                    />
                </label>
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
                <input type="button" value="Próximo Passo" />
            </div>
        </form>
    )
}


export default UserForm;