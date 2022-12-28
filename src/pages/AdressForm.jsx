import React from "react";
import { Input } from "../components/Input";
import "../styles/adressform.scss"

import NavBar from "../components/NavBar";

import { useState } from "react";

function AddressForm({ onSubmit, setCurrentPage }) {

    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [pontoReferencia, setPontoReferencia] = useState('');

    return (
        <>
            <h1>Criação de Usuário</h1>
            <NavBar />

            <form name="endereco" onSubmit={onSubmit}>
                <div className="bottomdiv">
                    <label htmlFor="cep">
                        CEP:
                        <input type="text" id="cep" value={cep} onChange={(event) => setCep(event.target.value)} required />
                    </label>
                    <label htmlFor="rua">
                        Rua:
                        <input type="text" id="rua" value={rua} onChange={(event) => setRua(event.target.value)} required />
                    </label>
                </div>
                <div className="bottomdiv">
                    <div className="bottomdiv2">
                        <label htmlFor="numero">Número:
                            <input type="text" id="numero" value={numero} onChange={(event) => setNumero(event.target.value)} required />
                        </label>
                        <label htmlFor="bairro">Bairro:
                            <input type="text" id="bairro" value={bairro} onChange={(event) => setBairro(event.target.value)} required />
                        </label>
                    </div>
                    <label htmlFor="cidade">Cidade:
                        <input type="text" id="cidade" value={cidade} onChange={(event) => setCidade(event.target.value)} required />
                    </label>
                </div>
                <label htmlFor="pontoReferencia">Ponto de Referência:
                    <input type="text" id="pontoReferencia" value={pontoReferencia} onChange={(event) => setPontoReferencia(event.target.value)} />
                </label>
                <div className="buttons">
                    <button className="button_voltar" type="button" onClick={() => setCurrentPage(1)}>Voltar</button>

                    <button type="submit">Próximo Passo</button>
                </div>
            </form>
        </>

    )
}


export default AddressForm;