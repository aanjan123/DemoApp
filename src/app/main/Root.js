import React from 'react'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducers from '../reducers'
import Router from './Router'

import {persistStore} from 'redux-persist'
import {PersistGate} from 'redux-persist/es/integration/react'

// import createSagaMiddleware from 'redux-saga';
// import {watcherSaga} from './../sagas/saga';

// const sagaMiddleware = createSagaMiddleware();

const middleware = [thunkMiddleware]
const store = compose(applyMiddleware(...middleware))(createStore)(reducers)

// sagaMiddleware.run(watcherSaga);

let persistor = persistStore(store)

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
