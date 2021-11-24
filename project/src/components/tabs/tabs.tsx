import Review from '../review/review';
import { ReviewType} from '../../types/review';
import {Film}  from '../../types/films';
import { convertTime } from '../../utils/utils';
import {getLevel} from '../../utils/utils';
import { useState} from 'react';
import {TabValues} from '../../const';

type TabsProps = {
  film: Film;
  reviews: ReviewType[]
}

function Tabs({film, reviews}: TabsProps): JSX.Element
{
  const [tab, setTab] = useState(TabValues.Overview);


  return(
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className="film-nav__item">
            <a href="#!" className={`film-nav__link ${tab === TabValues.Overview ? 'film-nav__item--active' : ''} `} onClick = {(evt) =>{evt.preventDefault(); setTab(TabValues.Overview);}}>Overview</a>
          </li>
          <li className="film-nav__item " >
            <a href="#!" className={`film-nav__link ${tab === TabValues.Details ? 'film-nav__item--active' : ''} `} onClick = {(evt) =>{evt.preventDefault(); setTab(TabValues.Details);}}>Details</a>
          </li>
          <li className="film-nav__item">
            <a href="#!" className={`film-nav__link ${tab === TabValues.Review ? 'film-nav__item--active' : ''} `} onClick = {(evt) =>{evt.preventDefault(); setTab(TabValues.Review);}}>Reviews</a>
          </li>
        </ul>
      </nav>

      <div className="film-card__text film-card__row" style={tab === TabValues.Overview ? {display : 'block'} : {display : 'none'}}>
        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Director</strong>
            <span className="film-card__details-value">{film.director}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Starring</strong>
            <span className="film-card__details-value">
              {film.starring.length !== 1 ? film.starring.slice(0, film.starring.length - 1).map((star)=> `${star}, `) :
                film.starring[film.starring.length - 1]}

            </span>
          </p>
        </div>

        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Run Time</strong>
            <span className="film-card__details-value">{convertTime(film.runTime)}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Genre</strong>
            <span className="film-card__details-value">{film.genre}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Released</strong>
            <span className="film-card__details-value">{film.released}</span>
          </p>
        </div>
      </div>

      <div style={tab === TabValues.Details ? {display : 'block'} : {display : 'none'}}>
        <div className="film-rating" >
          <div className="film-rating__score">{String(film.rating.toFixed(1)).replace('.', ',')}</div>
          <p className="film-rating__meta">
            <span className="film-rating__level">{getLevel(film.rating)}</span>
            <span className="film-rating__count">{film.scoresCount} ratings</span>
          </p>
        </div>

        <div className="film-card__text">
          <p>{film.description}</p>
          <p className="film-card__director"><strong>Director: {film.director}</strong></p>
          <p className="film-card__starring">
            <strong>Starring:
              {film.starring.length !== 1 ? film.starring.slice(0, film.starring.length - 2).forEach((star)=> `${star} + ', '`) :
                film.starring[film.starring.length - 1]} and other
            </strong>
          </p>
        </div>
      </div>


      <div className="film-card__reviews film-card__row" style={tab === TabValues.Review ? {display : 'block'} : {display : 'none'}}>
        <div className="film-card__reviews-col">
          {reviews.slice(0, 3).map((review) => <Review review={review} key={review.user + review.date}/>)}
        </div>
        <div className="film-card__reviews-col">
          {reviews.slice(3, 6).map((review) => <Review review = {review} key={review.user + review.date}/>)}
        </div>
      </div>
    </div>
  );
}

export default Tabs;
