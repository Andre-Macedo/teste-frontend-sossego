import React, { useState } from 'react';

import UserForm from './UserForm';
import AdressForm from './AdressForm';
import AboutForm from './AboutForm';

import UserInfo from './UserInfo';

function Form() {

    const [currentPage, setCurrentPage] = useState(1);
    const [identificacao, setIdentifacacao] = useState({});
    const [endereco, setEndereco] = useState({});
    const [about, setAbout] = useState("");


    const handleSubmit = (e, sobre) => {
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
                setCurrentPage(currentPage + 1);
            } else if (form.name === 'endereco') {
                setEndereco({
                    cep: form.cep.value,
                    bairro: form.bairro.value,
                    rua: form.rua.value,
                    cidade: form.cidade.value,
                    numero: form.numero.value,
                    pontoReferencia: form.pontoReferencia.value,
                });
                setCurrentPage(currentPage + 1);
            } else if (form.name === 'about') {
                setAbout(sobre)
                setCurrentPage(currentPage + 1);
            }
        }
    };

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    const senhaRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

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
            } else if (!senhaRegex.test(form.senha.value)) {
                form.senha.setCustomValidity('A senha deve ter pelo menos 8 caracteres, 1 maiúscula, 1 número e 1 símbolo');
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

            // const cepRegex = /^\d{8}$/;
            // if (!cepRegex.test(form.cep.value)) {
            //     form.cep.setCustomValidity('CEP inválido');
            //     isValid = false;
            // } else {
            //     form.cep.setCustomValidity('');
            // }

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


    let formToRender;


    switch (currentPage) {
        case 1:
            formToRender = <UserForm onSubmit={handleSubmit} setCurrentPage={setCurrentPage} />;
            break
        case 2:
            formToRender = <AdressForm onSubmit={handleSubmit} setCurrentPage={setCurrentPage} />;
            break
        case 3:
            formToRender = <AboutForm onSubmit={handleSubmit} setCurrentPage={setCurrentPage} setAbout={setAbout} />;
            break
        case 4:
            formToRender = <UserInfo
                name={identificacao.nome}
                email={identificacao.email}
                rua={endereco.rua}
                numero={endereco.numero}
                cep={endereco.cep}

                setIdentifacacao={setIdentifacacao}
                setEndereco={setEndereco}
                setAbout={setAbout}
                setCurrentPage={setCurrentPage}
            />
            break
        default:
            formToRender = <UserForm onSubmit={handleSubmit} setCurrentPage={setCurrentPage} />;
    }


    return (
        <div>
            {formToRender}
        </div>
    );

}

export default Form;