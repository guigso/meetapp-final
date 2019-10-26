import React from 'react';
import * as Yup from 'yup';

import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { updateProfileRequest } from 'store/modules/user/actions';
import { Container } from './styles';

export default function Profile() {
    const schema = Yup.object().shape({
        name: Yup.string(),
        email: Yup.string().email(),
        oldPassword: Yup.string().min(6),
        password: Yup.string().when('oldPassword', (oldPassword, field) =>
            oldPassword ? field.required().min(6) : field
        ),
        confirmPassword: Yup.string().when('password', (password, field) =>
            password ? field.required().oneOf([Yup.ref('password')]) : field
        ),
    });
    const profile = useSelector(state => state.user.profile);
    const dispatch = useDispatch();

    function handleSubmit(data) {
        dispatch(updateProfileRequest(data));
    }

    return (
        <Container>
            <Form initialData={profile} schema={schema} onSubmit={handleSubmit}>
                <Input name="name" placeholder="Nome Completo" />
                <Input
                    name="email"
                    type="email"
                    placeholder="Seu endereço de email"
                />
                <hr />
                <Input
                    name="oldPassword"
                    type="password"
                    placeholder="Sua senha atual"
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Nova senha"
                />
                <Input
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirmação de senha"
                />
                <button type="submit">Salvar Perfil</button>
            </Form>
        </Container>
    );
}
