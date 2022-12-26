import React from "react";
import { Input } from "../components/Input";
import "../styles/adressform.scss"

function AddressForm() {

    return (
        <form>
            <div className="bottomdiv">
                <Input label="CEP" inputType="text" inputName="CEP" />
                <Input label="Rua" inputType="text" inputName="Rua" />
            </div>
            <div className="bottomdiv">
                <div className="bottomdiv2">
                    <Input label="Número" inputType="text" inputName="Numero" />
                    <Input label="Bairro" inputType="text" inputName="Bairro" />
                </div>
                <Input label="Cidade" inputType="text" inputName="Cidade" />
            </div>
            <Input label="Ponto de Referência" inputType="text" inputName="Ponto de referencia" />
            <div className="buttons">
                <Input className="button_voltar" inputType="button" value="Voltar" />
                <Input inputType="button" value="Próximo Passo" />
            </div>
        </form>
    )
}


export default AddressForm;