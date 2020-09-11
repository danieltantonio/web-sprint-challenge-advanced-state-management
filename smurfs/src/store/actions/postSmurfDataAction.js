import axios from 'axios';

export const POST_DATA = 'POST_DATA';
export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS';
export const POST_DATA_ERROR = 'POST_DATA_ERROR';

export const postSmurfData = (data) => {
    return (dispatch) => {
        if(!data) {
            return dispatch({ type: POST_DATA_ERROR, payload: 'ERROR: You did not put all the required fields to create a new smurf' });
        }
        dispatch({ type: POST_DATA });
        axios
        .post('http://localhost:3333/smurfs', data)
        .then(res => {
            console.log(res);
            dispatch({ type: POST_DATA_SUCCESS, payload: 'SUCCESS: Successfully created new smurf!' })
        })
        .catch(err => {
            dispatch({ type: POST_DATA_ERROR, payload: 'ERROR: Failed to created new smurf!' })
        })
    }
}