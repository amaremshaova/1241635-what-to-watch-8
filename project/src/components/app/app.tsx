import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import SignIn from '../sign-in/sign-in';
import AddingReview from '../adding-review/adding-review';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import Player from '../player/player';
import NotFoundPage from '../not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import {AppRoute, AuthorizationStatus} from '../../const';


type AppScreenProps = {
  name: string,
  genre: string,
  year: number;
}

function App({name, genre, year} : AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainScreen nameFilm={name} genreFilm={genre} yearFilm={year}/>
        </Route>
        <Route exact path={AppRoute.Login}>
          <SignIn />
        </Route>
        <Route exact path={AppRoute.AddingReview}>
          <AddingReview/>
        </Route>
        <Route exact path={AppRoute.Film}>
          <Film />
        </Route>
        <Route exact path={AppRoute.Player}>
          <Player />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyList/>}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route>
          <NotFoundPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
