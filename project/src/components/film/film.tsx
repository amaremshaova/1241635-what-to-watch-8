import { useHistory} from 'react-router-dom';
import { APIRoute, AuthorizationStatus, CountFilms} from '../../const';
import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import Tabs from '../tabs/tabs';
import Footer from '../footer/footer';
import UserAccount from '../user-account/user-account';
import {connect, ConnectedProps} from 'react-redux';
import { State } from '../../types/state';
import { getFilmAction, getReviewsAction, getMoreLikeFilmsAction, changeFavoriteFilmsAction, logoutAction} from '../../store/api-actions';
import {ThunkAppDispatch} from '../../types/action';
import FilmsList from '../films-list/films-list';
import { updateFilmCards } from '../../store/actions';
import { StatusData } from '../../types/status-data';


const mapStateToProps = ({films, reviews, authorizationStatus, activeFilm, moreLikeFilms, renderedFilmCardsCount, myFilms}: State) => ({
  films,
  reviews,
  authorizationStatus,
  activeFilm,
  moreLikeFilms,
  renderedFilmCardsCount,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onGetFilm(id: number) {
    dispatch(getFilmAction(id));
  },
  onGetReviews(id: number){
    dispatch(getReviewsAction(id));
  },
  onGetMoreLikeFilms(id: number){
    dispatch(getMoreLikeFilmsAction(id));
  },
  onUpdateFilmCards(renderedFilmCardsCount: number){
    dispatch(updateFilmCards(renderedFilmCardsCount));
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

function Film(props: PropsFromRedux) :JSX.Element{
  const {reviews, authorizationStatus, activeFilm, moreLikeFilms, renderedFilmCardsCount, onGetFilm, onGetReviews, onGetMoreLikeFilms, onUpdateFilmCards, onChangeFavoriteFilms, logout} = props;
  const history = useHistory();
  const positionFilmId = Number(window.location.pathname.lastIndexOf(':') + 1);
  const filmId = Number(window.location.pathname.substr(positionFilmId));
  onGetFilm(filmId);
  onGetReviews(filmId);
  onGetMoreLikeFilms(filmId);
  onUpdateFilmCards(CountFilms.MoreLike);


  const handleChangeFavoriteFilms = () =>{
    const status = activeFilm.isFavorite ? 0 : 1;
    onChangeFavoriteFilms({id: activeFilm.id, status: status});};

  return(
    <div>
      <section className="film-card film-card--full" style={{backgroundColor:activeFilm.backgroundColor}}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={activeFilm.backgroundImage} alt={activeFilm.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo/>
            <UserAccount authorizationStatus={authorizationStatus} logoutAction = {logout}/>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{activeFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{activeFilm.genre}</span>
                <span className="film-card__year">{activeFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={()=>history.push(APIRoute.Player+activeFilm.id)}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use href="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button" disabled={(authorizationStatus === AuthorizationStatus.Auth)} onClick={()=>handleChangeFavoriteFilms()}>
                  {
                    activeFilm.isFavorite ?
                      <svg viewBox="0 0 18 14" width="18" height="14">
                        <use href="#in-list"></use>
                      </svg> :
                      <svg viewBox="0 0 19 20" width="19" height="20">
                        <use href="#add"></use>
                      </svg>
                  }
                  <span>My list</span>
                </button>
                <Link to={`${APIRoute.Film}:${activeFilm.id}${APIRoute.Review}`} className="btn film-card__button">
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={activeFilm.posterImage} alt={activeFilm.name} width="218" height="327" />
            </div>

            <Tabs film={activeFilm} reviews={reviews}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsList films = {moreLikeFilms} renderedFilmCardsCount={renderedFilmCardsCount}/>
        </section>

        <Footer/>
      </div>
    </div>
  );
}

export {Film};
export default connector(Film);
