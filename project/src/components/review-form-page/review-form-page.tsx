import ReviewForm from '../review-form/review-form';
import Logo from '../logo/logo';
import {getFilmAction } from '../../store/api-actions';

import UserAccount from '../user-account/user-account';
import { useDispatch, useSelector } from 'react-redux';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import { getFilm } from '../../store/film-data/selectors';

function ReviewFormPage() :JSX.Element{

  const dispatch = useDispatch();

  const positionFilmId = Number(window.location.pathname.lastIndexOf(':') + 1);
  const position =  Number(window.location.pathname.indexOf('/review'));
  const filmId = Number(window.location.pathname.substring(positionFilmId, position));

  dispatch(getFilmAction(filmId));
  const film = useSelector(getFilm);

  return(
    <div>
      <section className="film-card film-card--full" style={{backgroundColor:film.backgroundColor}}>
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={`${film.name}  poster`} />
          </div>

          <h1 className="visually-hidden">{filmId}</h1>

          <header className="page-header">
            <Logo/>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={AppRoute.Main} className="breadcrumbs__link">{film.name}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link" href="/">Add review</a>
                </li>
              </ul>
            </nav>
            <UserAccount />
          </header>

          <div className="film-card__poster film-card__poster--small">
            <img src={film.posterImage} alt={`${film.name}  poster`} width="218" height="327" />
          </div>
        </div>
        <ReviewForm id = {filmId} backgroundColor={film.backgroundColor}/>
      </section>
    </div>
  );
}

export default ReviewFormPage;
