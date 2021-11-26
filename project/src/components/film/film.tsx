import { useHistory} from 'react-router-dom';
import { APIRoute, AuthorizationStatus, CountFilms} from '../../const';
import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import Tabs from '../tabs/tabs';
import Footer from '../footer/footer';
import UserAccount from '../user-account/user-account';
import {useDispatch, useSelector} from 'react-redux';
import { getFilmAction, getReviewsAction, getSimilarFilmsAction, changeFavoriteFilmsAction} from '../../store/api-actions';
import FilmsList from '../films-list/films-list';
import {updateFilmCards } from '../../store/actions';
import {getFilm, getSimilarFilms} from '../../store/film-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

function Film() :JSX.Element{

  const renderedSimilarCount = CountFilms.MoreLike;

  const history = useHistory();
  const dispatch = useDispatch();


  const positionFilmId = Number(window.location.pathname.lastIndexOf(':') + 1);
  const filmId = Number(window.location.pathname.substr(positionFilmId));

  dispatch(getFilmAction(filmId));
  dispatch(getReviewsAction(filmId));
  dispatch(getSimilarFilmsAction(filmId));
  dispatch(updateFilmCards(CountFilms.MoreLike));

  const film = useSelector(getFilm);
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const similarFilms = useSelector(getSimilarFilms);


  const handleChangeFavoriteFilms = () =>{
    const status = film.isFavorite ? 0 : 1;
    dispatch(changeFavoriteFilmsAction({id: film.id, status: status}));};

  return(
    <div>
      <section className="film-card film-card--full" style={{backgroundColor:film.backgroundColor}}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo/>
            <UserAccount />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={()=>history.push(APIRoute.Player+film.id)}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use href="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button" disabled={(authorizationStatus !== AuthorizationStatus.Auth)} onClick={()=>handleChangeFavoriteFilms()}>
                  {
                    film.isFavorite ?
                      <svg viewBox="0 0 18 14" width="18" height="14">
                        <use href="#in-list"></use>
                      </svg> :
                      <svg viewBox="0 0 19 20" width="19" height="20">
                        <use href="#add"></use>
                      </svg>
                  }
                  <span>My list</span>
                </button>
                <Link to={`${APIRoute.Film}:${film.id}${APIRoute.Review}`} className="btn film-card__button">
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218" height="327" />
            </div>

            <Tabs />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsList films = {similarFilms} renderedFilmCardsCount={renderedSimilarCount}/>
        </section>

        <Footer/>
      </div>
    </div>
  );
}

export default Film;
