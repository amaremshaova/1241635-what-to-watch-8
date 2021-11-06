export enum AppRoute {
  Login = '/login',
  MyList = '/mylist',
  Main = '/',
  Film = '/films/:id',
  AddingReview = '/films/:id/review',
  Player = '/player/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
