import React from 'react'
import './Card.scss'



const Card = ({ name, image }) => {

  return (
    <div className='product'>
      <img className='product__image' src={image} alt={name}></img>
      <h1 className='product__name'>Product name</h1>
      <div className='product__info'>
        <p>Price, brand, reccomended skill, sizes</p>
      </div>
    </div>
  )
}

export default Card