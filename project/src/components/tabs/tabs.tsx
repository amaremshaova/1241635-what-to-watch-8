import Review from '../review/review';
import { convertTime } from '../../utils/utils';
import {getLevel} from '../../utils/utils';
import { useState, useRef} from 'react';
import {TabValues} from '../../const';
import { useSelector } from 'react-redux';
import { getFilm, getReviews } from '../../store/film-data/selectors';

/*type TabsProps = {
  film: Film;
  reviews: ReviewType[]
}/*/

function Tabs(): JSX.Element
{
  const film =useSelector(getFilm);
  const reviews = useSelector(getReviews);
  const [tab, setTab] = useState(TabValues.Overview);
  const starringTextRef =  useRef<HTMLSpanElement | null>(null);
  const strongStarringTextRef = useRef<HTMLParagraphElement | null>(null);


  if (starringTextRef.current !== null) {
    starringTextRef.current.innerHTML = film.starring.map((star, index)=> ` <br/> ${star}`).join();
  }


  return(
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${tab === TabValues.Overview ? 'film-nav__item--active' : ''}`}>
            <a href="#!" className='film-nav__link' onClick = {(evt) =>{evt.preventDefault(); setTab(TabValues.Overview);}}>Overview</a>
          </li>
          <li className={`film-nav__item ${tab === TabValues.Details ? 'film-nav__item--active' : ''}`} >
            <a href="#!" className='film-nav__link' onClick = {(evt) =>{evt.preventDefault(); setTab(TabValues.Details);}}>Details</a>
          </li>
          <li className={`film-nav__item ${tab === TabValues.Review ? 'film-nav__item--active' : ''}`}>
            <a href="#!" className='film-nav__link' onClick = {(evt) =>{evt.preventDefault(); setTab(TabValues.Review);}}>Reviews</a>
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
            <span className="film-card__details-value" ref = {starringTextRef}>
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
          <p className="film-card__starring" ref = {strongStarringTextRef}>
            <strong>Starring: {film.starring.map((star, index)=> ` ${star}`).join()} and other</strong>
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
