import React from 'react';
import './cards.css'

const Cards = ({item, handleClick}) => {
    const {name, price, image} = item;
  return (
    <div className="col-md-4">
      <div className="container_main">
        
            <img src={image} alt="name of card" className='image' />
        
        <div className="details">
            <p className='Text'>{name}</p>
            <p>Price - {price}Rs</p>
            <button onClick={()=>handleClick(item)} >Add to Cart</button>
        </div>
        {/* <div className="details2">
        </div> */}
        </div>
    </div>
  )
}

export default Cards