import React from "react";
import NavBar from "../components/NavBar";
import { Input } from "../components/Input";

import "../styles/aboutform.scss"

import { useState } from "react";

function AboutForm({ onSubmit, cleanForm, setCurrentPage }) {

    const [sobre, setSobre] = useState("");

    return (
        <>
            <h1>Criação de Usuário</h1>
            <NavBar imgId="verde" imgEndereco="verde" imgAbout="roxo" />
            <form className="aboutForm" name="about" onSubmit={(e) => onSubmit(e, e.target.about.value)}>
                <label htmlFor="aboutTextBox">Nos conte mais sobre você</label>
                <textarea id="aboutTextBox" name="about" width="874px" rows="13"
                    value={sobre}
                    onChange={(event) => setSobre(event.target.value)}
                    required
                />
                <div className="buttons">
                    <button className="button_voltar" type="button" onClick={() => {
                        setCurrentPage(2)
                        cleanForm.setAbout("")
                        cleanForm.setEndereco({})
                    }}>Voltar</button>
                    <button type="submit">Próximo Passo</button>
                </div>
            </form>
        </>
    )
}


export default AboutForm;