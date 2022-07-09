import React from 'react';
// import ReactDOM from 'react-dom/client';


const Card = (props) => {
    console.log(props);
  return (
    <>
        <div className='cards'>
            <div className='card'>
                <img src={props.imgsrc}
                alt='MovieTitle'
                className='card__img'
                />
                <div className='card__info'>
                    <h3 className='card__title'>{props.title}</h3>
                    <span className='card__category'>
                        {props.category}
                    </span>
                    <span className='card__rating'>
                        {props.rating}
                    </span>
                
                </div>
            </div>
        </div>
    </>
  )
}

export default Card;