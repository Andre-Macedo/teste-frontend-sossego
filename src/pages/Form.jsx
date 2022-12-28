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

    const cleanForm = {
        setIdentificacao: () => setIdentifacacao({}),
        setEndereco: () => setEndereco({}),
        setAbout: () => setAbout(""),
    }


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

    const validateForm = (form) => {
        let isValid = true;

        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        const senhaRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
        const cepRegex = /^[0-9]{8}$/;

        const validateField = (field, fieldName, fieldRegex) => {
            if (!field.value) {
                field.setCustomValidity(`Por favor preencha o campo ${fieldName}`);
                isValid = false;
            } else if (fieldRegex && !fieldRegex.test(field.value)) {
                field.setCustomValidity(`Por favor insira um ${fieldName} válido`);
                isValid = false;
            } else {
                field.setCustomValidity('');
            }
        };

        if (form.name === 'identificacao') {
            validateField(form.nome, 'nome');
            validateField(form.email, 'email', emailRegex);
            validateField(form.senha, 'senha', senhaRegex);

            validateField(
                form.confirmacaoSenha,
                'confirmação de senha',
                form.senha.value !== form.confirmacaoSenha.value ? null : undefined
            );

            validateField(form.dataNascimento, 'data de nascimento');
        } else if (form.name === 'endereco') {
            validateField(form.cep, 'CEP', cepRegex);

            validateField(form.bairro, 'bairro');
            validateField(form.rua, 'rua');
            validateField(form.cidade, 'cidade');
            validateField(form.numero, 'número');
            validateField(form.pontoReferencia, 'ponto referência');
        } else if (form.name === 'about') {
            validateField(form.about, 'sobre');
        }

        return isValid;
    };

    let formToRender;

    switch (currentPage) {
        case 1:
            formToRender = <UserForm onSubmit={handleSubmit} setCurrentPage={setCurrentPage} />;
            break
        case 2:
            formToRender = <AdressForm onSubmit={handleSubmit} cleanForm={cleanForm} setCurrentPage={setCurrentPage} />;
            break
        case 3:
            formToRender = <AboutForm onSubmit={handleSubmit} cleanForm={cleanForm} setCurrentPage={setCurrentPage} />;
            break
        case 4:
            formToRender = <UserInfo
                name={identificacao.nome}
                email={identificacao.email}
                rua={endereco.rua}
                numero={endereco.numero}
                cep={endereco.cep}

                cleanForm={cleanForm}
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