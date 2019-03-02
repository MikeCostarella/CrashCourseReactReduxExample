import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            };
        case NEW_POST:
        return { // does not actually add post because we are using JSONPlaceHoder instead of Web API
            ...state,
            item: action.payload
        };        
        default:
            return state;
    }
}