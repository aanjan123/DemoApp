import React from 'react'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
// import thunkMiddleware from 'redux-thunk'

import reducers from '../reducers'
import Router from './Router'

import {persistStore} from 'redux-persist'
import {PersistGate} from 'redux-persist/es/integration/react'

import createSagaMiddleware from 'redux-saga';
import root_saga from './../sagas/';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware]
const store = compose(applyMiddleware(...middleware))(createStore)(reducers)


let persistor = persistStore(store);
sagaMiddleware.run(root_saga);


class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    )
  }
}

export default Root
