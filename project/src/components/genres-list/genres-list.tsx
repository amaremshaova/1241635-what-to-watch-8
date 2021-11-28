import Genre from '../genre/genre';

type GenresListProps= {
  genres: string[],
  activeGenre: string,
  onUpdateGenre: (genre: string) => void;
}

function GenresList({ genres, activeGenre, onUpdateGenre}: GenresListProps): JSX.Element{

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) =>
        <Genre genre={genre} activeGenre={activeGenre} key={genre} onUpdateGenre={onUpdateGenre}/>)}
    </ul>
  );

}

export default GenresList;
