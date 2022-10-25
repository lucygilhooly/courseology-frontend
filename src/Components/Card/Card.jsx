import React from 'react'
import './Card.scss'



const Card = ({ name, image, price, brand, skill}) => {

  return (
    <div className='product'>
      <img className='product__image' src={image} alt={name}></img>
      <h1 className='product__name'>{name}</h1>
      <div className='product__info'>
        <p>£{price}</p>
        <p>{brand}</p>
        <p>{skill}</p>
      </div>
    </div>
  )
}

export default Card