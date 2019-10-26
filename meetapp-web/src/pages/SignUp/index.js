import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from 'assets/logo.svg';
import { signUpRequest } from 'store/modules/auth/actions';

// import { Container } from './styles';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Insira um e-mail válido')
        .required('O Email é obrigatório'),
    password: Yup.string()
        .min(6, 'No minimo 6 caracteres')
        .required('A senha é obrigatória'),

    nome: Yup.string().required('O nome é obrigatório'),
});

export default function SignUp() {
    const dispatch = useDispatch();
    function handleSubmit({ nome, email, password }) {
        dispatch(signUpRequest(nome, email, password));
    }

    return (
        <>
            <img src={logo} alt="MeetApp" />

            <Form onSubmit={handleSubmit} schema={schema}>
                <Input name="nome" type="text" placeholder="Nome completo" />
                <Input
                    name="email"
                    type="email"
                    placeholder="Digite seu e-mail"
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Sua senha secreta"
                />
                <button type="submit">Criar conta</button>
                <Link to="/">Já tenho login</Link>
            </Form>
        </>
    );
}
