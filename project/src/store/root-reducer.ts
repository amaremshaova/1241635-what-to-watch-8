import {combineReducers} from 'redux';
import {userProcess} from './user-process/user-process';
import { filmData } from './film-data/film-data';
import { appProcess } from './app-process/app-process';

export enum NameSpace {
  data = 'DATA',
  app = 'APP',
  user = 'USER',
}

export const rootReducer = combineReducers({
  [NameSpace.data]: filmData,
  [NameSpace.app]: appProcess,
  [NameSpace.user]: userProcess,
});

export type RootState = ReturnType<typeof rootReducer>;
