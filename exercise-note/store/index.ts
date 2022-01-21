import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import { FoodState } from './reducers/food';
import { RootState } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';

// const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
//   if (process.env.NODE_ENV !== 'production') {
//     const { composeWithDevTools } = require('redux-devtools-extension');
//     return composeWithDevTools(applyMiddleware(...middleware));
//   }
//   return applyMiddleware(...middleware);
// };

// const configureStore = () => {
//   const sagaMiddleware = createSagaMiddleware();
//   const middlewares = [sagaMiddleware];

//   const store = createStore(rootReducer, {}, bindMiddleware([...middlewares]));
//   sagaMiddleware.run(rootSaga);
//   return store;
// };

// export default configureStore;

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer =
    process.env.NODE_ENV === 'production' ? compose(applyMiddleware(...middlewares)) : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(rootReducer, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = createWrapper(configureStore, { debug: process.env.NODE_ENV === 'development' });

export default wrapper;
