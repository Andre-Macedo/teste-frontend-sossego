import React from "react";

function AddressForm() {

    return (
        <form>

            <label> CEP
                <input
                    type="text"
                    name="name"
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


export default AddressForm;