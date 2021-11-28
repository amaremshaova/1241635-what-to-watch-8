type GenreProps = {
  genre: string,
  activeGenre: string,
  onUpdateGenre: (genre: string) => void;
}

function Genre({genre, activeGenre, onUpdateGenre}: GenreProps): JSX.Element{
  return(
    <li
      className={`catalog__genres-item ${activeGenre===genre ? 'catalog__genres-item--active' : ''}`}
      onClick={(evt)=>{
        evt.preventDefault();
        onUpdateGenre(genre);
      }}
    >
      <a href="/" className="catalog__genres-link">{genre}</a>
    </li>
  );
}

export default Genre;
