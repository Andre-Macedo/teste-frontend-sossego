import React from "react";
import { Input } from "../components/Input";
import "../styles/adressform.scss"

import { useState } from "react";

function AddressForm({ onSubmit, setEndereco }) {

    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [pontoReferencia, setPontoReferencia] = useState('');

    function validateFields() {
        if (!cep || !rua || !numero || !bairro || !cidade || !pontoReferencia) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return false;
        }
        const cepRegex = /^\d{5}-\d{3}$/;
        if (!cepRegex.test(cep)) {
            alert('CEP inválido');
            return;
        }
        return true;
    }

    function handleSubmit(event) {

        event.preventDefault();

        if (!validateFields()) {
            return;
        }

        alert('Dados enviados com sucesso!');

        setCep('');
        setCidade('');
        setRua('');
        setBairro('');
        setNumero('');
        setPontoReferencia('');

    }

    return (
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
                <button className="button_voltar" type="button" onClick={() => setEndereco({})}>Voltar</button>
                <button type="submit">Próximo Passo</button>
            </div>
        </form>
    )
}


export default AddressForm;