
export const STATUS_SUCCESS = 200;
export const USER_AVATAR = 'img/avatar.jpg';

export enum AppRoute {
  Login = '/login',
  MyList = '/mylist',
  Main = '/',
  Film = '/films/:id',
  ReviewPage = '/films/:id/review',
  Player = '/player/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum CountFilms{
  Catalog = 8,
  Similar = 4,
}

export enum APIRoute {
  Film = '/films/',
  Login = '/login',
  Logout = '/logout',
  Review = '/review',
  Reviews = '/comments/',
  Similar = '/similar',
  FavoriteFilms = '/favorite/',
  PromoFilm = '/promo',
  Player = '/player/'
}

export enum TabValues{
  Overview = 'Overview',
  Details = 'Details',
  Review = 'Review'
}

export enum StatusFavoriteFilm{
  Delete = 0,
  Add = 1
}

export const PatternSignIn = {
  Login : /^[^ ]+@[^ ]+\.[a-z]{2,3}$/,
  Password : /(?=.*\d)(?=.*[a-zA-z])/,
};

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;
