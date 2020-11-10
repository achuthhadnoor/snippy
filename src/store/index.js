import {compose, createStore,applyMiddleware} from 'redux'
import Thunk from 'redux-thunk'

import rootReducers from './reducers'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(Thunk),
  // other store enhancers if any
);
const store = createStore(rootReducers, enhancer);
 
export default store