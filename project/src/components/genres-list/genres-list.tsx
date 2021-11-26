import Genre from '../genre/genre';

type GenresListProps= {
  genres: string[],
  activeGenre: string,
  updateGenre: (genre: string) => void;
}

function GenresList({ genres, activeGenre, updateGenre}: GenresListProps): JSX.Element{

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) =>
        <Genre genre={genre} activeGenre={activeGenre} key={genre} updateGenre={updateGenre}/>)}
    </ul>
  );

}

export default GenresList;
