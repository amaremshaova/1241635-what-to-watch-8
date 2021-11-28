type ShowMoreButtonProps = {
  filmsCount: number,
  renderedFilmCardsCount: number,
  onUpdateFilmCards:(newRenderedFilmCardsCount: number)=>void
}

const  STEP_INCREASE_COUNT = 8;

function ShowMoreButton({filmsCount, renderedFilmCardsCount, onUpdateFilmCards}:ShowMoreButtonProps): JSX.Element{

  const newRenderedFilmCardsCount = Math.min(filmsCount, renderedFilmCardsCount +  STEP_INCREASE_COUNT);

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={()=>onUpdateFilmCards(newRenderedFilmCardsCount)}
      >Show more
      </button>
    </div> );
}


export default ShowMoreButton;
