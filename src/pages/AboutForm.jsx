import React from "react";
import { Input } from "../components/Input";

import "../styles/aboutform.scss"

import { useState } from "react";

function AboutForm({ onSubmit, setEndereco }) {

    const [about, setAbout] = useState("");

    return (
        <form name="about" onSubmit={onSubmit}>
            <label htmlFor="aboutTextBox">Nos conte mais sobre você</label>
            <textarea id="aboutTextBox" name="aboutTextBox" width="874px" rows="13"
                value={about}
                onChange={(event) => setAbout(event.target.value)} required />
            <div className="buttons">
                <button className="button_voltar" type="button" onClick={() => setAbout({})}>Voltar</button>
                <button type="submit">Próximo Passo</button>
            </div>
        </form>
    )
}


export default AboutForm;