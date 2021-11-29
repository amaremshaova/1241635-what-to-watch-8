import {createReducer} from '@reduxjs/toolkit';
import {requireAuthorization, requireLogout} from '../actions';
import {UserProcess} from '../../types/state';
import {AuthorizationStatus, USER_AVATAR} from '../../const';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userAvatar: USER_AVATAR,
};

const userProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload.authStatus;
      state.userAvatar = action.payload.avatarUrl;
    })
    .addCase(requireLogout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    });
});

export {userProcess};
