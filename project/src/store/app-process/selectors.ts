import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';

export const getResponseStatus = (state: State): number => state[NameSpace.app].responseStatus;
export const getDataLoading = (state: State): boolean => state[NameSpace.app].isDataLoaded;
