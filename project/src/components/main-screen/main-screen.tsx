
import FilmsList from '../films-list/films-list';
import PromoFilm from '../promo-film/promo-film';
import GenresList from '../genres-list/genres-list';
import {useSelector} from 'react-redux';
import Footer from '../footer/footer';
import ShowMoreButton from '../show-more-button/show-more-button';
import {CountFilms } from '../../const';
import {getFilms} from '../../store/film-data/selectors';
import {useState } from 'react';
import { getGenres } from '../../utils/get-genres';

const INITIAL_ALL_GENRES = 'All genres';
const COUNT_GENRES = 10;

function MainScreen(): JSX.Element{
  const films = useSelector(getFilms);
  const genres = getGenres(films).slice(0, COUNT_GENRES);

  const [activeGenre, setActiveGenre] = useState(INITIAL_ALL_GENRES);
  const [renderedFilmCardsCount, setRenderedFilmCardsCount ] = useState(CountFilms.Catalog);

  const handleFilteredFilms = () => {
    if (activeGenre === INITIAL_ALL_GENRES){
      return films;
    }
    else{
      return films.filter((film) => film.genre === activeGenre);
    }
  };

  const filmsCount = handleFilteredFilms().length;

  return (
    <div>
      <PromoFilm />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList genres = {genres} activeGenre={activeGenre} onUpdateGenre={setActiveGenre}/>
          <FilmsList films={handleFilteredFilms()} renderedFilmCardsCount={renderedFilmCardsCount}/>
          {
            renderedFilmCardsCount < filmsCount ?
              <ShowMoreButton
                filmsCount={filmsCount}
                renderedFilmCardsCount={renderedFilmCardsCount}
                onUpdateFilmCards={setRenderedFilmCardsCount}
              /> : ''
          }
        </section>

        <Footer/>
      </div>
    </div>
  );
}

export default MainScreen;
