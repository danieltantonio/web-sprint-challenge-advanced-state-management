import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from '../actions';

const initState = {
    smurfs: [],
    error: '',
    isLoading: false
}

export default (state = initState, action) => {
    switch(action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isLoading: true
            };

        case FETCH_DATA_SUCCESS:
            return {
                ...initState,
                smurfs: action.payload,
            };

        case FETCH_DATA_ERROR:
            return {
                ...initState,
                error: action.payload
            }

        default:
            return state;
    }
}