
import FilmsList from '../films-list/films-list';
import Logo from '../logo/logo';
import GenresList from '../genres-list/genres-list';
import {State} from '../../types/state';
import {Actions} from '../../types/action';
import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {updateGenre, updateFilmCards} from '../../store/actions';
import UserAccount from '../user-account/user-account';
import Footer from '../footer/footer';
import ShowMoreButton from '../show-more-button/show-more-button';
import { APIRoute, CountFilms } from '../../const';
import { getPromoFilmAction, changeFavoriteFilmsAction, logoutAction } from '../../store/api-actions';
import { ThunkAppDispatch } from '../../types/action';
import { StatusData } from '../../types/status-data';
import { useHistory } from 'react-router';


const mapStateToProps = ({films, reviews, activeGenre, genres,
  renderedFilmCardsCount, authorizationStatus, promoFilm}: State) => ({
  films,
  reviews,
  activeGenre,
  genres,
  renderedFilmCardsCount,
  authorizationStatus,
  promoFilm,
});


const mapDispatchToProps = (dispatch: Dispatch<Actions> & ThunkAppDispatch) => ({
  onUpdateGenre(genre : string) {
    dispatch(updateGenre(genre));
  },

  onUpdateFilmCards(renderedFilmCardsCount: number){
    dispatch(updateFilmCards(renderedFilmCardsCount));
  },

  onUpdatePromoFilm(){
    dispatch(getPromoFilmAction());
  },

  onChangeFavoriteFilms({id, status}: StatusData){
    dispatch(changeFavoriteFilmsAction({id, status}));
  },
  logout(){
    dispatch(logoutAction());
  },
});


const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function MainScreen(props: PropsFromRedux): JSX.Element{
  const {films, genres, activeGenre, renderedFilmCardsCount, authorizationStatus, promoFilm, onUpdateGenre, onUpdateFilmCards, onUpdatePromoFilm, onChangeFavoriteFilms, logout} = props;


  const history = useHistory();

  let filteredFilms = [];
  if (activeGenre === 'All genres'){
    filteredFilms = films;
  }
  else{
    filteredFilms = films.filter((film) => film.genre === activeGenre);
  }

  onUpdatePromoFilm();

  const filmsCount = filteredFilms.length;
  onUpdateFilmCards(CountFilms.Catalog);

  const handleChangeFavoriteFilms = () =>{
    const status = promoFilm.isFavorite ? 0 : 1;
    onChangeFavoriteFilms({id: promoFilm.id, status: status});};

  return (
    <div>
      <section className="film-card" >
        <div className="film-card__bg">
          <img src={promoFilm.backgroundImage} alt={promoFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo/>
          <UserAccount authorizationStatus={authorizationStatus} logoutAction={logout}/>
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

          <GenresList genres={genres} activeGenre={activeGenre} updateGenre={onUpdateGenre}/>
          <FilmsList films={filteredFilms} renderedFilmCardsCount={renderedFilmCardsCount}/>
          {
            renderedFilmCardsCount < filmsCount ? <ShowMoreButton filmsCount={filmsCount} renderedFilmCardsCount={renderedFilmCardsCount} updateFilmCards={onUpdateFilmCards}/> : ''
          }
        </section>

        <Footer/>
      </div>
    </div>
  );
}

export {MainScreen};
export default connector(MainScreen);
