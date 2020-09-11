import { POST_DATA, POST_DATA_SUCCESS, POST_DATA_ERROR } from '../actions/postSmurfDataAction';

const initState = {
    status: '',
    error: '',
    isLoading: false
};

export const postSmurf = (state = initState, action) => {
    switch(action.type) {
        case POST_DATA:
            return {
                ...state,
                isLoading: true
            };
        
        case POST_DATA_SUCCESS:
            return {
                ...initState,
                status: action.payload
            };
        
        case POST_DATA_ERROR:
            return {
                ...initState,
                error: action.payload
            };

        default:
            return state;
    }
};