import ReviewForm from '../review-form/review-form';
import Logo from '../logo/logo';
import {fetchReviewsAction } from '../../store/api-actions';

import UserAccount from '../user-account/user-account';
import { useDispatch, useSelector } from 'react-redux';
import { APIRoute } from '../../const';
import { Link } from 'react-router-dom';
import { getFilm } from '../../store/film-data/selectors';
import { useEffect} from 'react';
import { useParams } from 'react-router';
import LoadingScreen from '../loading-screen/loading-screen';


function ReviewFormPage() :JSX.Element{
  const dispatch = useDispatch();

  const {id} = useParams<{id?:string}>();
  const filmId = Number(id);

  const film = useSelector(getFilm);

  useEffect(()=>{
    dispatch(fetchReviewsAction);
  }, [dispatch, filmId]);

  if (film){
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
                    <Link to={APIRoute.Film+film.id} className="breadcrumbs__link">{film.name}</Link>
                  </li>
                  <li className="breadcrumbs__item">
                    <Link className="breadcrumbs__link" to={APIRoute.Film+film.id+APIRoute.Review}>Add review</Link>
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
  else {
    return <LoadingScreen/>;
  }
}

export default ReviewFormPage;
