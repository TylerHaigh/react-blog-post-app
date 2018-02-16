import _ from 'lodash'

import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions/index.action';

export default function(state = {}, action) {

    // ReactPromise is meant to stop action from being sent through
    // but for some reason, the action payload is undefined on the first iteration...
    if (!action.payload) return state;

    switch(action.type) {
        case FETCH_POSTS : return _.mapKeys(action.payload.data, 'id');
        case FETCH_POST  :
            // const post = action.payload.data;
            // const newState = { ...state }
            // newState[post.id] = post;
            // return newState

            const post = action.payload.data;
            return { ...state, [post.id] : post }
        case DELETE_POST : return _.omit(state, action.payload);
        default: return state
    }

}