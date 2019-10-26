import { all, takeLatest, put, call } from 'redux-saga/effects';
// import { toast } from 'react-toastify';
import api from '~/services/api';
import {
    updateMeetupSuccess,
    updateMeetupFailure,
    createMeetupSuccess,
    getMeetupsSuccess,
    deleteMeetupSuccess,
    getMeetupsFailure,
} from './actions';

export function* updateMeetup({ payload }) {
    try {
        const meetup = payload.data;
        const response = yield call(api.put, `meetups/${meetup.id}`, meetup);

        // toast.success('Meetup atualizado com sucesso!');

        yield put(updateMeetupSuccess(response.data));
        // history.push('/dashboard');
    } catch (err) {
        // toast.error('Erro ao atualizar meetup, confira os dados.');
        yield put(updateMeetupFailure());
    }
}
export function* createMeetup({ payload }) {
    try {
        console.tron.log(payload);
        const meetup = payload.data;

        const response = yield call(api.post, 'meetups', meetup);

        // toast.success('Meetup criado com sucesso!');

        yield put(createMeetupSuccess(response.data));
        // history.push('/dashboard');
    } catch (err) {
        // toast.error('Erro ao criar meetup, confira os dados.');
        yield put(updateMeetupFailure());
    }
}

export function* deleteMeetup({ payload }) {
    try {
        const { id } = payload;
        yield call(api.delete, `meetups/${id}`);

        yield put(deleteMeetupSuccess(id));
        // history.push('/dashboard');
        // toast.success('Meetup cancelado com sucesso!');
    } catch (err) {
        // toast.error('Erro ao deletar meetup, tente novamente mais tarde.');
        yield put(updateMeetupFailure());
    }
}

export function* getMeetups() {
    try {
        const response = yield call(api.get, 'organizing');

        yield put(getMeetupsSuccess(response.data));
    } catch (err) {
       // toast.error('Erro ao consultar meetups, tente novamente mais tarde.');
        yield put(getMeetupsFailure());
    }
}

export default all([
    takeLatest('@meetup/UPDATE_MEETUP_REQUEST', updateMeetup),
    takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetup),
    takeLatest('@meetup/DELETE_MEETUP_REQUEST', deleteMeetup),
    takeLatest('@meetup/GET_MEETUPS_REQUEST', getMeetups),
]);
