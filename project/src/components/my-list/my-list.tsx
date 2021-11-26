import Logo from '../logo/logo';
import UserAccount from '../user-account/user-account';
import {useDispatch, useSelector} from 'react-redux';
import FilmsList from '../films-list/films-list';
import Footer from '../footer/footer';
import { getFavoriteFilmsAction} from '../../store/api-actions';
import { updateFilmCards } from '../../store/actions';
import {getFavoriteFilms} from '../../store/film-data/selectors';

function MyList(): JSX.Element {

  const films = useSelector(getFavoriteFilms);
  const dispatch = useDispatch();

  dispatch(getFavoriteFilmsAction());
  dispatch(updateFilmCards(films.length));

  return(
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">My list</h1>
        <UserAccount />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={films} renderedFilmCardsCount={films.length}/>
      </section>

      <Footer/>
    </div>
  );
}


export default MyList;
