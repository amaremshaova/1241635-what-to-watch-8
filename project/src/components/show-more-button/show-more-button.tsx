type ShowMoreButtonProps = {
  filmsCount: number,
  renderedFilmCardsCount: number,
  updateFilmCards:(newRenderedFilmCardsCount: number)=>void
}

const  STEP_INCREASE_COUNT = 8;


function ShowMoreButton({filmsCount, renderedFilmCardsCount, updateFilmCards}:ShowMoreButtonProps): JSX.Element{

  const newRenderedFilmCardsCount = Math.min(filmsCount, renderedFilmCardsCount +  STEP_INCREASE_COUNT);

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={()=>updateFilmCards(newRenderedFilmCardsCount)}>Show more</button>
    </div> );
}


export default ShowMoreButton;
