import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    MdChevronRight,
    MdAddCircleOutline,
    MdInfoOutline,
} from 'react-icons/md';
import { getMeetupsRequest } from 'store/modules/meetup/actions';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Container, Meetup, Loading } from './styles';

export default function Dashboard({ history }) {
    const dispatch = useDispatch();
    const meetups = useSelector(state => state.meetup.meetups);
    const loading = useSelector(state => state.meetup.loading);
    useEffect(() => {
        async function getDashboardMeetups() {
            await dispatch(getMeetupsRequest());
        }
        getDashboardMeetups();
        // eslint-disable-next-line
    }, []);

    function renderContent() {
        if (loading) {
            return (
                <Loading>
                    <div />
                    <div />
                    <div />
                </Loading>
            );
        }
        if (meetups && meetups.length === 0) {
            return (
                <>
                    <MdInfoOutline size={64} />
                    <h1>Sem Meetups cadastrados</h1>
                </>
            );
        }
        return meetups.map(meetup => (
            <Meetup
                key={meetup.id}
                onClick={() => history.push(`details/${meetup.id}`, { meetup })}
            >
                <strong>{meetup.title}</strong>
                <aside>
                    <span>
                        {format(
                            parseISO(meetup.date),
                            "dd 'de' MMMM 'às' hh'h'mm",
                            { locale: ptBR }
                        )}
                    </span>
                    <MdChevronRight size={32} color="#fff" />
                </aside>
            </Meetup>
        ));
        // );
    }

    return (
        <Container>
            <header>
                <h1>Meus Meetups</h1>
                <button type="button" onClick={() => history.push('/meetup')}>
                    <MdAddCircleOutline size={24} color="#fff" />
                    Novo Meetup
                </button>
            </header>
            <ul>{renderContent()}</ul>
        </Container>
    );
}
