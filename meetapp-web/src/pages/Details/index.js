import React from 'react';
import { useDispatch } from 'react-redux';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import {
    MdEdit,
    MdPinDrop,
    MdDeleteForever,
    MdDateRange,
} from 'react-icons/md';
import { deleteMeetupRequest } from 'store/modules/meetup/actions';
import {
    Container,
    Banner,
    Header,
    Buttons,
    EditButton,
    CancelButton,
    Title,
    Description,
    Footer,
    FooterItem,
} from './styles';

export default function Details({ location, history }) {
    const dispatch = useDispatch();
    const { meetup } = location.state;

    function handleDelete(id) {
        console.tron.log(123213);
        dispatch(deleteMeetupRequest(id));
    }

    return (
        <Container>
            <Header>
                <Title>{meetup.title}</Title>
                <Buttons>
                    <EditButton
                        disabled={meetup.past}
                        onClick={() =>
                            history.push(`/meetup/${meetup.id}`, {
                                meetup,
                            })
                        }
                    >
                        <MdEdit size={24} />
                        Editar
                    </EditButton>
                    <CancelButton
                        disabled={meetup.past}
                        onClick={() => handleDelete(meetup.id)}
                    >
                        <MdDeleteForever size={24} />
                        Cancelar
                    </CancelButton>
                </Buttons>
            </Header>
            <Banner src={meetup.File.url} />
            <Description>{meetup.description}</Description>
            <Footer>
                <FooterItem>
                    <MdDateRange size={20} />
                    <span>
                        {format(
                            parseISO(meetup.date),
                            "dd 'de' MMMM 'às' hh'h'mm",
                            { locale: ptBR }
                        )}
                    </span>
                </FooterItem>
                <FooterItem>
                    <MdPinDrop size={20} />
                    <span>{meetup.location}</span>
                </FooterItem>
            </Footer>
        </Container>
    );
}
