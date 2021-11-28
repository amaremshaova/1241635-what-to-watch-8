import Logo from '../logo/logo';
import UserAccount from '../user-account/user-account';
import {getPromoFilm} from '../../store/film-data/selectors';
import {changeFavoriteFilmsAction} from '../../store/api-actions';
import { useHistory } from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import LoadingScreen from '../loading-screen/loading-screen';
import { APIRoute, AuthorizationStatus, StatusFavoriteFilm } from '../../const';
import { useEffect, useRef} from 'react';
import {fetchPromoFilmAction} from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

function PromoFilm(): JSX.Element{
  const history = useHistory();
  const promoFilm = useSelector(getPromoFilm);
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const dispatch = useDispatch();

  const handleChangeFavoriteFilms = () =>{
    if (promoFilm){
      const status = promoFilm.isFavorite ? StatusFavoriteFilm.Delete : StatusFavoriteFilm.Add;
      dispatch(changeFavoriteFilmsAction({id: promoFilm.id, status: status}));
      dispatch(fetchPromoFilmAction());
    }
  };

  const handleRedirect = () =>{
    history.push(APIRoute.Player+promoFilm?.id);
  };

  const myListButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    dispatch(fetchPromoFilmAction());
  }, [dispatch, promoFilm]);


  if(promoFilm){
    return (
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
                <button className="btn btn--play film-card__button" type="button" onClick={handleRedirect}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use href="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                {authorizationStatus === AuthorizationStatus.Auth ?
                  <button className="btn btn--list film-card__button"
                    type="button"
                    ref={myListButtonRef}
                    onClick={handleChangeFavoriteFilms}
                  >
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
                  : ''}
              </div>
            </div>
          </div>
        </div>
      </section>);
  }
  else {
    return <LoadingScreen/>;
  }
}


export default PromoFilm;
