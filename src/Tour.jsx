import { useState } from 'react';

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  const handleReadMore = (e) => {
    e.preventDefault();
    setReadMore(!readMore);
  };
  return (
    <article className='single-tour'>
      <img src={image} alt={name} className='img' />
      <span className='tour-price'>$ {price}</span>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>
          {readMore ? info : info.substring(0, 100)}
          <button className='info-btn' onClick={handleReadMore}>{readMore? 'Show Less': '...Read More'} </button>
        </p>
        <button
          className='btn btn-block delete-btn'
          onClick={() => removeTour(id)}
        >
          Remove
        </button>
      </div>
    </article>
  );
};
export default Tour;
