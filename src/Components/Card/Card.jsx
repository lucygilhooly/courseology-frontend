import React from 'react'
import './Card.scss'


const Card = ({ name, image }) => {

  return (
    <div className='course'>
      <img className='course__image' src={image} alt={name}></img>
      <h1 className='course__name'>{name}</h1>
      <div className='course__info'>
      </div>
    </div>
  )
}

export default Card