import {userProcess} from './user-process';
import {ActionType} from '../../types/action';
import {AuthorizationStatus, USER_AVATAR} from '../../const';


describe('Reducer: user', () => {
  it('without additional parameters should return initial state', () => {
    expect(userProcess(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({authorizationStatus: AuthorizationStatus.Unknown, userAvatar: USER_AVATAR});
  });

  it('should update authorizationStatus to "NO_AUTH"', () => {
    const state = {authorizationStatus: AuthorizationStatus.NoAuth, userAvatar: USER_AVATAR};
    const requiredAuthorizationAction = {
      type: ActionType.RequireAuthorization,
      payload: {authStatus: AuthorizationStatus.NoAuth},
    };

    expect(userProcess(state, requiredAuthorizationAction))
      .toEqual({authorizationStatus: AuthorizationStatus.NoAuth});
  });

  it('should update authorizationStatus to "AUTH"', () => {
    const state = {authorizationStatus: AuthorizationStatus.NoAuth, userAvatar: ''};
    const requiredAuthorizationAction = {
      type: ActionType.RequireAuthorization,
      payload: {authStatus: AuthorizationStatus.Auth, avatarUrl: USER_AVATAR},
    };

    expect(userProcess(state, requiredAuthorizationAction))
      .toEqual({authorizationStatus: AuthorizationStatus.Auth, userAvatar: USER_AVATAR});
  });
});
