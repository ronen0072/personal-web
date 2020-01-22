import authReducer from './authReducer';
import projectReducer from './projectReducer';
import messagesReducer from './messagesReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    messages: messagesReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});
export default rootReducer;