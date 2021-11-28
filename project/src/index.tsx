import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from '@reduxjs/toolkit';
import {Router as BrowserRouter} from 'react-router-dom';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {createAPI} from './services/api';
import { AuthorizationStatus } from './const';
import { requireAuthorization } from './store/actions';
import { checkAuthAction } from './store/api-actions';
import { fetchFilmsAction } from './store/api-actions';
import {rootReducer} from './store/root-reducer';
import {redirect} from './store/middlewares/redirect';
import {ToastContainer} from 'react-toastify';
import browserHistory from './browser-history';
import 'react-toastify/dist/ReactToastify.css';


const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth, 'img/avatar.img')),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

store.dispatch(checkAuthAction());
store.dispatch(fetchFilmsAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <BrowserRouter history={browserHistory}>
        <ToastContainer />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
