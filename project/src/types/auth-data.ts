import { Token } from '../services/token';

export type AuthData = {
  id: number,
  email: string,
  name: string,
  avatarUrl: string,
  token: string;
};

export type AuthDataServer = {
  id: number,
  email: string,
  name: string,
  'avatar_url': string,
  token: Token;
};

