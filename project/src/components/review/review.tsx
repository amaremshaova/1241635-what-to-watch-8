import { ReviewType} from '../../types/review';
import moment from 'moment';

type ReviewProps = {
  review : ReviewType
}

function Review({review}: ReviewProps):JSX.Element{
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time className="review__date" dateTime={moment(review.date).format('YYYY-MM-DD')}>{moment(review.date).format('LL')}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
}

export default Review;
