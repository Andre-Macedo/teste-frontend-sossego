import React, { useState } from 'react';
import "../styles/userform.scss"

import { Input } from "../components/Input";

function UserForm() {

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
        <form>
            <Input
                label="Nome"
                inputId="nome"
                inputName="nome"
                inputType="text"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                required
            />
            <div className="bottomdiv">
                <Input
                    label="Senha"
                    inputId="senha"
                    inputName="senha"
                    inputType="password"
                    value={senha}
                    onChange={(event) => setSenha(event.target.value)}
                    required
                />
                <Input
                    label="Confirmação de Senha"
                    inputId="confirmacaoSenha"
                    inputName="confirmacaoSenha"
                    inputType="password"
                    value={confirmacaoSenha}
                    onChange={(event) => setConfirmacaoSenha(event.target.value)}
                    required
                />
            </div>
            <div className="bottomdiv">
                <Input
                    label="Email"
                    inputId="email"
                    inputName="email"
                    inputType="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
                <label>
                    Data de Nascimento
                    <input
                        type="text"
                        onChange={(event) => setDataNascimento(event.target.value)}
                        onFocus={(e) => (e.target.type = "date")}
                        onBlur={(e) => (e.target.type = "text")}
                        required
                    />
                </label>
            </div>
            <div className="buttons">
                <Input inputType="submit" value="Próximo Passo" onClick={handleSubmit} />
            </div>
        </form>
    )
}


export default UserForm;