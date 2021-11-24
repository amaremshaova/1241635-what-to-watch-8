
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
  MoreLike = 4,
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
  Player = '/player/:'
}

export enum TabValues{
  Overview = 'Overview',
  Details = 'Details',
  Review = 'Review'
}
export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;
