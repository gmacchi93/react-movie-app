import { combineReducers } from 'redux';
import movie from './MovieReducer';
import user from './UserReducer';
import status from './StatusReducer';

const rootReducer = combineReducers({
    status,
    movie,
    user,
});

export default rootReducer;
