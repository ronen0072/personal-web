import authReducer from './authReducer';
import projectReducer from './projectReducer';
import itemsListReducer from './itemsListReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    itemsList: itemsListReducer,
    firestore: firestoreReducer
});
export default rootReducer;