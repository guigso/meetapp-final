import produce from 'immer';

const INITIAL_STATE = {
    meetups: [],
    loading: true,
};

export default function user(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@meetup/UPDATE_MEETUP_SUCCESS': {
                const index = draft.meetups.findIndex(
                    meetup => meetup.id === action.payload.meetup.id
                );
                draft.meetups[index] = action.payload.meetup;
                break;
            }
            case '@meetup/CREATE_MEETUP_SUCCESS': {
                draft.meetups.unshift(action.payload.meetup);
                break;
            }
            case '@meetup/GET_MEETUP_SUCCESS': {
                draft.meetups = action.payload.meetups;
                draft.loading = false;
                break;
            }
            case '@meetup/GET_MEETUPS_REQUEST': {
                draft.loading = true;
                break;
            }
            case '@meetup/GET_MEETUPS_FAILURE': {
                draft.loading = false;
                break;
            }
            case '@meetup/DELETE_MEETUP_SUCCESS': {
                const index = draft.meetups.findIndex(
                    meetup => meetup.id === action.payload.id
                );
                draft.meetups.splice(index, 1);
                break;
            }
            default:
        }
    });
}
