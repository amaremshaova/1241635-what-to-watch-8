
import FilmsList from '../films-list/films-list';
import Logo from '../logo/logo';
import GenresList from '../genres-list/genres-list';
import {State} from '../../types/state';
import {Actions} from '../../types/action';
import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {updateGenre, getFilms, updateFilmCards} from '../../store/actions';


const mapStateToProps = ({films, myFilms, reviews, activeGenre, genres, renderedFilmCardsCount}: State) => ({
  films,
  myFilms,
  reviews,
  activeGenre,
  genres,
  renderedFilmCardsCount,
});


const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onUpdateGenre(genre : string) {
    dispatch(updateGenre(genre));
    dispatch(getFilms(genre));
  },
  onUpdateFilmCards(renderedFilmCardsCount: number){
    dispatch(updateFilmCards(renderedFilmCardsCount));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function MainScreen(props: PropsFromRedux): JSX.Element{
  const {films, genres, activeGenre, renderedFilmCardsCount, onUpdateGenre, onUpdateFilmCards} = props;
  return (
    <div>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo/>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar" >
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link" href="/">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">The Grand Budapest Hotel</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">Drama</span>
                <span className="film-card__year">2014</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use href="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use href="#add"></use>
                  </svg>
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

          <GenresList genres={genres} activeGenre={activeGenre} updateGenre={onUpdateGenre}/>
          <FilmsList films={films} renderedFilmCardsCount={renderedFilmCardsCount} updateFilmCards={onUpdateFilmCards}/>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light" href="/">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export {MainScreen};
export default connector(MainScreen);
