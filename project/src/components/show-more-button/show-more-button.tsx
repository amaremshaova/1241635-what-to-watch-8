type ShowMoreButtonProps = {
  filmsCount: number,
  renderedFilmCardsCount: number,
  updateFilmCards:(newRenderedFilmCardsCount: number)=>void
}

const TASK_COUNT_PER_STEP = 8;


function ShowMoreButton({filmsCount, renderedFilmCardsCount, updateFilmCards}:ShowMoreButtonProps): JSX.Element{

  const newRenderedFilmCardsCount = Math.min(filmsCount, renderedFilmCardsCount + TASK_COUNT_PER_STEP);

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={()=>updateFilmCards(newRenderedFilmCardsCount)}>Show more</button>
    </div> );
}


export default ShowMoreButton;
