import { combineReducers }  from 'redux';
import { postReducer }      from './postReducer';
import { userReducer }      from './userReducer';


let reducers = combineReducers({
    posts: postReducer,
    user: userReducer
});

export default reducers;
