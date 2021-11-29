import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from '@reduxjs/toolkit';
import {BrowserRouter} from 'react-router-dom';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {createAPI} from './services/api';
import { AuthorizationStatus, USER_AVATAR } from './const';
import { requireAuthorization } from './store/actions';
import { checkAuthAction } from './store/api-actions';
import { fetchFilmsAction } from './store/api-actions';
import {rootReducer} from './store/root-reducer';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth, USER_AVATAR)),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

store.dispatch(checkAuthAction());
store.dispatch(fetchFilmsAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <BrowserRouter >
        <ToastContainer />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
