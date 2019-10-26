import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from 'assets/logo.svg';
import { signInRequest } from 'store/modules/auth/actions';

// import { Container } from './styles';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Insira um e-mail válido')
        .required('O Email é obrigatório'),
    password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading);

    function handleSubmit({ email, password }) {
        dispatch(signInRequest(email, password));
    }

    return (
        <>
            <img src={logo} alt="MeetApp" />

            <Form onSubmit={handleSubmit} schema={schema}>
                <Input type="email" name="email" placeholder="Seu email" />
                <Input
                    type="password"
                    name="password"
                    placeholder="Sua senha secreta"
                />
                <button type="submit">
                    {loading ? 'Carregando...' : 'Entrar'}
                </button>
                <Link to="/register">Criar conta grátis</Link>
            </Form>
        </>
    );
}
