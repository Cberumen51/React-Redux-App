import {FETCHING_DOG_START, FETCHING_DOG_SUCCESS} from '../actions/index'

const initialState = {
    Dog: null,
    isFetching: false,
    error: ''
};

export const reducer = ( state = initialState, action) => {
    switch (action.type) {
        case FETCHING_DOG_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
            case FETCHING_DOG_SUCCESS:
                return {
                    ...state, 
                    isFetching: false,
                    dog: action.payload
                };
                default:
                    return state;
    }
}