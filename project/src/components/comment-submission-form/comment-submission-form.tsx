import { useState, ChangeEvent } from 'react';

function CommentSubmissionForm():JSX.Element{

  const [comment, setComment] = useState({rating: 8, comment: ''});

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            <input className="rating__input" id="star-10" type="radio" name="rating" value="10" onChange={()=>setComment({...comment, rating: 10})}/>
            <label className="rating__label" htmlFor="star-10">Rating 10</label>

            <input className="rating__input" id="star-9" type="radio" name="rating" value="9" onChange={()=>setComment({...comment, rating: 9})}/>
            <label className="rating__label" htmlFor="star-9">Rating 9</label>

            <input className="rating__input" id="star-8" type="radio" name="rating" value="8" checked onChange={()=>setComment({...comment, rating: 8})}/>
            <label className="rating__label" htmlFor="star-8">Rating 8</label>

            <input className="rating__input" id="star-7" type="radio" name="rating" value="7" onChange={()=>setComment({...comment, rating: 7})}/>
            <label className="rating__label" htmlFor="star-7">Rating 7</label>

            <input className="rating__input" id="star-6" type="radio" name="rating" value="6" onChange={()=>setComment({...comment, rating: 6})}/>
            <label className="rating__label" htmlFor="star-6">Rating 6</label>

            <input className="rating__input" id="star-5" type="radio" name="rating" value="5" onChange={()=>setComment({...comment, rating: 5})}/>
            <label className="rating__label" htmlFor="star-5">Rating 5</label>

            <input className="rating__input" id="star-4" type="radio" name="rating" value="4" onChange={()=>setComment({...comment, rating: 4})}/>
            <label className="rating__label" htmlFor="star-4">Rating 4</label>

            <input className="rating__input" id="star-3" type="radio" name="rating" value="3" onChange={()=>setComment({...comment, rating: 3})}/>
            <label className="rating__label" htmlFor="star-3">Rating 3</label>

            <input className="rating__input" id="star-2" type="radio" name="rating" value="2" onChange={()=>setComment({...comment, rating: 2})}/>
            <label className="rating__label" htmlFor="star-2">Rating 2</label>

            <input className="rating__input" id="star-1" type="radio" name="rating" value="1" onChange={()=>setComment({...comment, rating: 1})}/>
            <label className="rating__label" htmlFor="star-1">Rating 1</label>
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={({target}: ChangeEvent<HTMLTextAreaElement>)=>setComment({...comment, comment: target.value})}></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" >Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}


export default CommentSubmissionForm;
