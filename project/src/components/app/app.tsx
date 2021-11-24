import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import SignIn from '../sign-in/sign-in';
import Player from '../player/player';
import NotFoundPage from '../not-found-page/not-found-page';
import {AppRoute} from '../../const';
import LoadingScreen from '../loading-screen/loading-screen';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';
import { isCheckedAuth } from '../../const';
import Film from '../film/film';
import MyList from '../my-list/my-list';
import ReviewForm from '../review-form-page/review-form-page';

const mapStateToProps = ({authorizationStatus, isDataLoaded}: State) => ({
  authorizationStatus,
  isDataLoaded,
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
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainScreen />
        </Route>
        <Route exact path={AppRoute.Login}>
          <SignIn />
        </Route>
        <Route exact path='/films/:id'>
          <Film/>
        </Route>
        <Route
          exact
          path={AppRoute.MyList}
        >
          <MyList/>
        </Route>
        <Route
          exact
          path='/films/:id/review'
        >
          <ReviewForm/>
        </Route>
        <Route exact path='/player/:id'>
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
