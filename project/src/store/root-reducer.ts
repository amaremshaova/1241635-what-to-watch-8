import {combineReducers} from 'redux';
import {userProcess} from './user-process/user-process';
import { filmData } from './film-data/film-data';
import { appProcess } from './app-process/app-process';

export enum NameSpace {
  Data = 'DATA',
  App = 'APP',
  User = 'USER',
}

export const rootReducer = combineReducers({
  [NameSpace.Data]: filmData,
  [NameSpace.App]: appProcess,
  [NameSpace.User]: userProcess,
});

export type RootState = ReturnType<typeof rootReducer>;
