import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import 'bootstrap/dist/css/bootstrap.min.css';
//components
import App from './App';
//reducers
import rootReducer from './store/reducers/rootReducer'

import {Provider} from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import { reduxFirestore, getFirestore, createFirestoreInstance} from 'redux-firestore';
import { ReactReduxFirebaseProvider  } from 'react-redux-firebase';
import firebase from './config/fbConfig';
import {BrowserRouter} from 'react-router-dom';
import thunk from 'redux-thunk';

const myStore = createStore ( rootReducer,
    compose (
        applyMiddleware (
            thunk.withExtraArgument ( getFirestore )
        ),
        reduxFirestore ( firebase )
    )
);
const rrfProps = {
    firebase,
    config: {},
    dispatch: myStore.dispatch,
    createFirestoreInstance // <- needed if using firestore
}
     
ReactDOM.render(
    <BrowserRouter>
    <Provider store = { myStore }>
         <ReactReduxFirebaseProvider { ...rrfProps }>
           <App />
       </ReactReduxFirebaseProvider>
    </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);