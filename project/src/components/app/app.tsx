import {Switch, Route} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import SignIn from '../sign-in/sign-in';
import Player from '../player/player';
import NotFoundPage from '../not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import {AppRoute} from '../../const';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';
import Film from '../film/film';
import MyList from '../my-list/my-list';
import ReviewFormPage from '../review-form-page/review-form-page';
import { isCheckedAuth } from '../../utils/utils';
import LoadingScreen from '../loading-screen/loading-screen';

const mapStateToProps = ({USER, DATA}: State) => ({
  authorizationStatus : USER.authorizationStatus,
  isDataLoaded : DATA.isDataLoaded,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

function App(props: PropsFromRedux): JSX.Element {
  const {authorizationStatus, isDataLoaded} = props;

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
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
        onRender={() => <MyList />}
      >
      </PrivateRoute>
      <PrivateRoute
        exact
        path={AppRoute.ReviewPage}
        onRender={() => <ReviewFormPage />}
      >
      </PrivateRoute>
      <Route exact path={AppRoute.Player}>
        <Player />
      </Route>
      <Route>
        <NotFoundPage/>
      </Route>
    </Switch>
  );
}

export {App};
export default connector(App);
