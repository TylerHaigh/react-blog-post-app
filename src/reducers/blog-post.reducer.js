import _ from 'lodash'

import { FETCH_POSTS } from '../actions/index.action';

export default function(state = null, action) {

    // ReactPromise is meant to stop action from being sent through
    // but for some reason, the action payload is undefined on the first iteration...
    if (!action.payload) return state;

    switch(action.type) {
        case FETCH_POSTS : return _.mapKeys(action.payload.data, 'id');
        default: return state
    }

}