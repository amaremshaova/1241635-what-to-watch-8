
import FilmsList from '../films-list/films-list';
import Logo from '../logo/logo';
import GenresList from '../genres-list/genres-list';
import {useDispatch, useSelector} from 'react-redux';
import { updateFilmCards} from '../../store/actions';
import UserAccount from '../user-account/user-account';
import Footer from '../footer/footer';
import ShowMoreButton from '../show-more-button/show-more-button';
import { APIRoute, CountFilms } from '../../const';
import { getPromoFilmAction, changeFavoriteFilmsAction} from '../../store/api-actions';
import { useHistory } from 'react-router';
import {getPromoFilm, getFilms} from '../../store/film-data/selectors';
import { useState } from 'react';
import { getGenres } from '../../utils/get-genres';

function MainScreen(): JSX.Element{

  const promoFilm = useSelector(getPromoFilm);
  const films = useSelector(getFilms);
  const genres = getGenres(films);

  const [activeGenre, setActiveGenre] = useState('All genres');
  const [renderedFilmCardsCount, setRenderedFilmCardsCount ] = useState(CountFilms.Catalog);

  const history = useHistory();
  const dispatch = useDispatch();

  let filteredFilms = [];
  if (activeGenre === 'All genres'){
    filteredFilms = films;
  }
  else{
    filteredFilms = films.filter((film) => film.genre === activeGenre);
  }

  dispatch(getPromoFilmAction());

  const filmsCount = filteredFilms.length;
  dispatch(updateFilmCards(CountFilms.Catalog));

  const handleChangeFavoriteFilms = () =>{
    const status = promoFilm.isFavorite ? 0 : 1;
    dispatch(changeFavoriteFilmsAction({id: promoFilm.id, status: status}));};

  return (
    <div>
      <section className="film-card" >
        <div className="film-card__bg">
          <img src={promoFilm.backgroundImage} alt={promoFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo/>
          <UserAccount />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.posterImage} alt={promoFilm.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={()=>history.push(APIRoute.Player+promoFilm.id)}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use href="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button" onClick={()=>{handleChangeFavoriteFilms();}}>
                  {
                    promoFilm.isFavorite ?
                      <svg viewBox="0 0 18 14" width="18" height="14">
                        <use href="#in-list"></use>
                      </svg> :
                      <svg viewBox="0 0 19 20" width="19" height="20">
                        <use href="#add"></use>
                      </svg>
                  }
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList genres = {genres} activeGenre={activeGenre} updateGenre={setActiveGenre}/>
          <FilmsList films={filteredFilms} renderedFilmCardsCount={renderedFilmCardsCount}/>
          {
            renderedFilmCardsCount < filmsCount ?
              <ShowMoreButton
                filmsCount={filmsCount}
                renderedFilmCardsCount={renderedFilmCardsCount}
                updateFilmCards={setRenderedFilmCardsCount}
              /> : ''
          }
        </section>

        <Footer/>
      </div>
    </div>
  );
}

export default MainScreen;
