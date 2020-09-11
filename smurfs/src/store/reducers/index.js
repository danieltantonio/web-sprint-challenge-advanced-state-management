import { combineReducers } from 'redux';
import { fetchSmurf } from './fetchSmurfReducer';
import { postSmurf } from './postSmurfReducer';

export default combineReducers({
    fetchSmurf,
    postSmurf
});