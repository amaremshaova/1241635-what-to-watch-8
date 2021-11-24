import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import SignIn from '../sign-in/sign-in';
import Player from '../player/player';
import NotFoundPage from '../not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import {AppRoute} from '../../const';
import LoadingScreen from '../loading-screen/loading-screen';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';
import { isCheckedAuth } from '../../const';
import Film from '../film/film';
import { ReviewFormPage } from '../review-form-page/review-form-page';
import { MyList } from '../my-list/my-list';
import { ThunkAppDispatch } from '../../types/action';
import { getFavoriteFilmsAction, logoutAction, getFilmAction, addReviewAction} from '../../store/api-actions';
import { updateFilmCards } from '../../store/actions';
import { CommentPost } from '../../types/review';

const mapStateToProps = ({authorizationStatus, isDataLoaded, myFilms, renderedFilmCardsCount, activeFilm, responseStatus}: State) => ({
  authorizationStatus,
  isDataLoaded,
  myFilms,
  renderedFilmCardsCount,
  activeFilm,
  responseStatus,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onGetFavoriteFilms(){
    dispatch(getFavoriteFilmsAction());
  },
  onUpdateFilmCards(renderedFilmCardsCount: number){
    dispatch(updateFilmCards(renderedFilmCardsCount));
  },
  logout(){
    dispatch(logoutAction());
  },
  onGetFilm(id: number) {
    dispatch(getFilmAction(id));
  },
  onAddReview(id: number, {rating, comment} : CommentPost){
    dispatch(addReviewAction(id, {rating, comment}));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App(props: PropsFromRedux): JSX.Element {
  const {authorizationStatus, isDataLoaded, myFilms, renderedFilmCardsCount, activeFilm, responseStatus, onGetFavoriteFilms, logout, onUpdateFilmCards, onGetFilm, onAddReview} = props;

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainScreen />
        </Route>
        <Route exact path={AppRoute.Login}>
          <SignIn />
        </Route>
        <Route exact path={AppRoute.Film}>
          <Film/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyList authorizationStatus = {authorizationStatus} myFilms={myFilms} renderedFilmCardsCount={renderedFilmCardsCount} onGetFavoriteFilms={onGetFavoriteFilms} logout={logout} onUpdateFilmCards={onUpdateFilmCards}/>}
        >
        </PrivateRoute>
        <PrivateRoute
          exact
          path={AppRoute.ReviewPage}
          render={() => <ReviewFormPage  authorizationStatus={authorizationStatus} activeFilm={activeFilm} responseStatus={responseStatus} onGetFilm = {onGetFilm} logout = {logout} onAddReview={onAddReview}/>}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Player}>
          <Player />
        </Route>
        <Route>
          <NotFoundPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export {App};
export default connector(App);
