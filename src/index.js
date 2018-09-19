import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Biblioteca from './Biblioteca';
import registerServiceWorker from './registerServiceWorker';

import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose } from 'redux'
import mainReducer from './mainReducer'
import { Provider } from 'react-redux'
import mainSaga from './sagas/mainSaga'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    mainReducer,
    composeEnhancer(
        applyMiddleware(sagaMiddleware)
    )
)

sagaMiddleware.run(mainSaga)

ReactDOM.render(
    <Provider store={store}>
        <Biblioteca />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
