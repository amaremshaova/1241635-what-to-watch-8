import { CommentPost } from '../../types/review';
import ReviewForm from '../review-form/review-form';
import Logo from '../logo/logo';
import { addReviewAction, getFilmAction } from '../../store/api-actions';
import { State } from '../../types/state';
import { ThunkAppDispatch } from '../../types/action';
import UserAccount from '../user-account/user-account';
import { connect } from 'react-redux';
import { ConnectedProps } from 'react-redux';
import { logoutAction } from '../../store/api-actions';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';

const mapStateToProps = ({activeFilm, authorizationStatus, responseStatus}: State) => ({
  activeFilm,
  authorizationStatus,
  responseStatus,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onGetFilm(id: number) {
    dispatch(getFilmAction(id));
  },
  onAddReview(id: number, {rating, comment} : CommentPost){
    dispatch(addReviewAction(id, {rating, comment}));
  },
  logout(){
    dispatch(logoutAction());
  },

});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

function ReviewFormPage(props: PropsFromRedux) :JSX.Element{
  const {activeFilm, authorizationStatus, responseStatus, onGetFilm, onAddReview, logout} = props;

  const positionFilmId = Number(window.location.pathname.lastIndexOf(':') + 1);
  const filmId = Number(window.location.pathname.substr(positionFilmId));
  onGetFilm(filmId);

  return(
    <div>
      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={activeFilm.posterImage} alt={`${activeFilm.name}  poster`} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <Logo/>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={AppRoute.Main} className="breadcrumbs__link">{activeFilm.name}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link" href="/">Add review</a>
                </li>
              </ul>
            </nav>
            <UserAccount authorizationStatus={authorizationStatus} logoutAction={logout}/>
          </header>

          <div className="film-card__poster film-card__poster--small">
            <img src={activeFilm.posterImage} alt={`${activeFilm.name}  poster`} width="218" height="327" />
          </div>
        </div>
        <ReviewForm onAddReview = {onAddReview} id = {filmId} responseStatus={responseStatus}/>
      </section>
    </div>
  );
}

export {ReviewFormPage};
export default connector(ReviewFormPage);
