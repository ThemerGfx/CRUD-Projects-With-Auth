import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'
//reducers
import authReducer from './authReducer'
import projectReducer from './projectReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  projectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer