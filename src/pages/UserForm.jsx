import React, { useState } from 'react';
import NavBar from '../components/NavBar';

import "../styles/userform.scss"

function UserForm({ onSubmit }) {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmacaoSenha, setConfirmacaoSenha] = useState('');

    return (
        <>

            <h1>Criação de Usuário</h1>
            <NavBar />

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
        </>
    )
}


export default UserForm;