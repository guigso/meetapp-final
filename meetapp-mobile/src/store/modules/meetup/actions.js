export function updateMeetupRequest(data) {
    return {
        type: '@meetup/UPDATE_MEETUP_REQUEST',
        payload: { data },
    };
}

export function updateMeetupSuccess(meetup) {
    return {
        type: '@meetup/UPDATE_MEETUP_SUCCESS',
        payload: { meetup },
    };
}

export function createMeetupRequest(data) {
    return {
        type: '@meetup/CREATE_MEETUP_REQUEST',
        payload: { data },
    };
}
export function createMeetupSuccess(meetup) {
    return {
        type: '@meetup/CREATE_MEETUP_SUCCESS',
        payload: { meetup },
    };
}

export function getMeetupsRequest() {
    return {
        type: '@meetup/GET_MEETUPS_REQUEST',
    };
}
export function getMeetupsSuccess(meetups) {
    return {
        type: '@meetup/GET_MEETUP_SUCCESS',
        payload: { meetups },
    };
}
export function getMeetupsFailure() {
    return {
        type: '@meetup/GET_MEETUP_FAILURE',
    };
}

export function deleteMeetupRequest(id) {
    return {
        type: '@meetup/DELETE_MEETUP_REQUEST',
        payload: { id },
    };
}
export function deleteMeetupSuccess(id) {
    return {
        type: '@meetup/DELETE_MEETUP_SUCCESS',
        payload: { id },
    };
}
export function updateMeetupFailure() {
    return {
        type: '@meetup/UPDATE_MEETUP_FAILURE',
    };
}
