import React from "react";
import { Input } from "../components/Input";

import "../styles/aboutform.scss"

function AboutForm() {

    return (
        <form>
            <label id="aboutTextBox">
                Nos conte mais sobre você
                <textarea type="text" width="874px" rows="13" />
            </label>
            <div className="buttons">
                <Input className="button_voltar" inputType="button" value="Voltar" />
                <Input inputType="button" value="Próximo Passo" />
            </div>
        </form>
    )
}


export default AboutForm;