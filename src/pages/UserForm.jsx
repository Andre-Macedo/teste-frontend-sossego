import React, { useState } from 'react';
import "../styles/userform.scss"

import { Input } from "../components/Input";

function UserForm({ onSubmit }) {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmacaoSenha, setConfirmacaoSenha] = useState('');

    function validateFields() {
        if (!nome || !email || !dataNascimento || !senha || !confirmacaoSenha) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return false;
        }

        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um email válido.');
            return false;
        }

        if (senha !== confirmacaoSenha) {
            alert('A senha e a confirmação de senha não são iguais. Por favor, verifique se você digitou corretamente a senha e a confirmação de senha.');
            return false;
        }

        const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
        if (!passwordRegex.test(senha)) {
            alert('A senha deve ter no mínimo 8 caracteres, uma maiúscula, um número e um caractere especial.');
            return false;
        }

        return true;
    }

    function handleSubmit(event) {

        event.preventDefault();

        if (!validateFields()) {
            return;
        }

        alert('Dados enviados com sucesso!');

        setNome('');
        setEmail('');
        setDataNascimento('');
        setSenha('');
        setConfirmacaoSenha('');

    }



    return (
        <form name="identificacao" onSubmit={onSubmit}>
            <label htmlFor="nome">
                Nome:
                <input type="text" id="nome" value={nome} onChange={(event) => setNome(event.target.value)} required />
            </label>
            <div className="bottomdiv">
                <label htmlFor="senha">
                    Senha:
                    <input type="password" id="senha" value={senha} onChange={(event) => setSenha(event.target.value)} required />
                </label>
                <label htmlFor="confirmacaoSenha">
                    Confirmação de Senha:
                    <input type="password" id="confirmacaoSenha" value={confirmacaoSenha} onChange={(event) => setConfirmacaoSenha(event.target.value)} required />
                </label>
            </div>
            <div className="bottomdiv">
                <label htmlFor="email">
                    Email:
                    <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
                </label>
                <label htmlFor="dataNascimento">
                    Data de Nascimento
                    <input
                        type="text"
                        id="dataNascimento"
                        value={dataNascimento}
                        onChange={(event) => setDataNascimento(event.target.value)}
                        onFocus={(e) => (e.target.type = "date")}
                        onBlur={(e) => (e.target.type = "text")}
                        required
                    />
                </label>
            </div>
            <div className="buttons">
                <button type="submit">Próximo Passo</button>
            </div>
        </form>
    )
}


export default UserForm;