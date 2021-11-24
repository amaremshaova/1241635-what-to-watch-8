
export enum AppRoute {
  Login = '/login',
  MyList = '/mylist',
  Main = '/',
  Film = '/films/:',
  AddingReview = '/review',
  Player = '/player/:'
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
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments/',
  Similar = '/similar',
  FavoriteFilms = '/favorite/',
  PromoFilm = '/promo'
}

export enum TabValues{
  Overview = 'Overview',
  Details = 'Details',
  Review = 'Review'
}
export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;
