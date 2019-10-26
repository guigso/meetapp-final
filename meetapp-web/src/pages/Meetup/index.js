import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MdAddCircleOutline } from 'react-icons/md';
import { Form, Input, Textarea } from '@rocketseat/unform';
import {
    createMeetupRequest,
    updateMeetupRequest,
} from 'store/modules/meetup/actions';
import * as Yup from 'yup';
import { parseISO } from 'date-fns';
import DatePickerInput from './DatePickerInput';

import { Container, SaveButton } from './styles';
import BannerInput from './BannerInput';

export default function Meetup({ location }) {
    const dispatch = useDispatch();
    const meetup = location.state ? location.state.meetup : null;

    const schema = Yup.object().shape({
        file_id: Yup.string(),
        title: Yup.string().required('Por favor, preencha o título.'),
        description: Yup.string().required('Por favor, preecha a descrição.'),
        date: Yup.date().required('Por favor, preencha uma data.'),
        location: Yup.string().required('Por favor, preencha uma localização.'),
    });

    function handleSubmit(data) {
        parseISO(data.date);
        if (meetup) {
            dispatch(updateMeetupRequest({ id: meetup.id, ...data }));
        } else {
            dispatch(createMeetupRequest(data));
        }
    }

    return (
        <Container>
            <Form
                onSubmit={handleSubmit}
                initialData={location.state ? location.state.meetup : null}
                schema={schema}
            >
                <BannerInput name="file_id" />
                <Input name="title" placeholder="Titulo do Meetup" />
                <Textarea name="description" placeholder="Descrição completa" />
                <DatePickerInput
                    name="date"
                    selectedDate={meetup && meetup.date}
                    placeholder="Data do Meetup"
                />
                <Input name="location" placeholder="Localização" />
                <SaveButton type="submit">
                    <MdAddCircleOutline size={25} />
                    Salvar Meetup
                </SaveButton>
            </Form>
        </Container>
    );
}
