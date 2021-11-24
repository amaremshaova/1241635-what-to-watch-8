import Logo from '../logo/logo';
import UserAccount from '../user-account/user-account';
import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';
import FilmsList from '../films-list/films-list';
import Footer from '../footer/footer';
import { getFavoriteFilmsAction } from '../../store/api-actions';
import {ThunkAppDispatch} from '../../types/action';
import { updateFilmCards } from '../../store/actions';

const mapStateToProps = ({authorizationStatus, myFilms, renderedFilmCardsCount}: State) => ({
  authorizationStatus,
  myFilms,
  renderedFilmCardsCount,

});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onGetFavoriteFilms(){
    dispatch(getFavoriteFilmsAction());
  },
  onUpdateFilmCards(renderedFilmCardsCount: number){
    dispatch(updateFilmCards(renderedFilmCardsCount));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps );

type PropsFromRedux = ConnectedProps<typeof connector>;

function MyList(props : PropsFromRedux): JSX.Element {
  const {authorizationStatus, myFilms, renderedFilmCardsCount, onUpdateFilmCards, onGetFavoriteFilms} = props;

  onGetFavoriteFilms();

  onUpdateFilmCards(myFilms.length);

  return(
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">My list</h1>
        <UserAccount authorizationStatus={authorizationStatus}/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={myFilms} renderedFilmCardsCount={renderedFilmCardsCount}/>
      </section>

      <Footer/>
    </div>
  );
}


export {MyList};

export default connector(MyList);
