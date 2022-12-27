import React, { useState } from 'react';

import UserForm from './UserForm';
import AdressForm from './AdressForm';
import AboutForm from './AboutForm';

function Form() {

    const [identificacao, setIdentifacacao] = useState({});
    const [endereco, setEndereco] = useState({});
    const [about, setAbout] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        if (validateForm(form)) {

            if (form.name === 'identificacao') {
                setIdentifacacao({
                    nome: form.nome.value,
                    email: form.email.value,
                    senha: form.senha.value,
                    confirmacaoSenha: form.confirmacaoSenha.value,
                    dataNascimento: form.dataNascimento.value,
                });
            } else if (form.name === 'endereco') {
                setEndereco({
                    cep: form.cep.value,
                    bairro: form.bairro.value,
                    rua: form.rua.value,
                    cidade: form.cidade.value,
                    numero: form.numero.value,
                    pontoReferencia: form.pontoReferencia.value,
                });
            } else {
                setAbout(form.about.value);
            }
        }
    };

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    const validateForm = (form) => {
        let isValid = true;
        if (form.name === 'identificacao') {

            if (!form.nome.value) {
                form.nome.setCustomValidity('Por favor preencha o nome');
                isValid = false;
            } else {
                form.nome.setCustomValidity('');
            }


            if (!form.email.value) {
                form.email.setCustomValidity('Por favor preencha o email');
                isValid = false;
            } else if (!emailRegex.test(form.email.value)) {
                form.email.setCustomValidity('Por favor insira um email válido');
                isValid = false;
            } else {
                form.email.setCustomValidity('');
            }


            if (!form.senha.value) {
                form.senha.setCustomValidity('Por favor preencha a senha');
                isValid = false;
            } else {
                form.senha.setCustomValidity('');
            }


            if (!form.confirmacaoSenha.value) {
                form.confirmacaoSenha.setCustomValidity(
                    'Por favor preencha a confirmação da senha'
                );
                isValid = false;
            } else if (form.senha.value !== form.confirmacaoSenha.value) {
                form.confirmacaoSenha.setCustomValidity(
                    'As senhas não coincidem'
                );
                isValid = false;
            } else {
                form.confirmacaoSenha.setCustomValidity('');
            }


            if (!form.dataNascimento.value) {
                form.dataNascimento.setCustomValidity('Por favor preencha a data de nascimento');
                isValid = false;
            } else {
                form.dataNascimento.setCustomValidity('');
            }


        } else if (form.name === 'endereco') {
            if (!form.cep.value) {
                form.cep.setCustomValidity('Por favor preencha o CEP');
                isValid = false;
            } else {
                form.cep.setCustomValidity('');
            }
            if (!form.bairro.value) {
                form.bairro.setCustomValidity('Por favor preencha o bairro');
                isValid = false;
            } else {
                form.bairro.setCustomValidity('');
            }
            if (!form.rua.value) {
                form.rua.setCustomValidity('Por favor preencha a rua');
                isValid = false;
            } else {
                form.rua.setCustomValidity('');
            }
            if (!form.cidade.value) {
                form.cidade.setCustomValidity('Por favor preencha a cidade');
                isValid = false;
            } else {
                form.cidade.setCustomValidity('');
            }
            if (!form.numero.value) {
                form.numero.setCustomValidity('Por favor preencha o número');
                isValid = false;
            } else {
                form.numero.setCustomValidity('');
            }
        } else {
            if (!form.about.value) {
                form.about.setCustomValidity('Por favor escreva sobre si mesmo');
                isValid = false;
            } else {
                form.about.setCustomValidity('');
            }
        }
        return isValid;
    }

    return (
        <div>

            {Object.keys(identificacao).length === 0 && <UserForm onSubmit={handleSubmit} />}

            {Object.keys(identificacao).length > 0 && Object.keys(endereco).length === 0 && (
                <AdressForm onSubmit={handleSubmit} setEndereco={setEndereco} />
            )}

            {Object.keys(identificacao).length > 0 && Object.keys(endereco).length > 0
                && about === '' && (
                    <AboutForm onSubmit={handleSubmit} setAbout={setAbout} />)}

            {/* {about && (
                <UserInfo
                    name={credentials.name}
                    email={credentials.email}
                    street={address.street}
                    number={address.number}
                    zipCode={address.zipCode}
                />
            )} */}
        </div>
    );
}

export default Form;