import React from 'react'
import './CardList.scss'
import Card from '../Card/Card'
import skiPic from '../../assets/images/download.png'

const CardList = ({products}) => {
  console.log(products)
  const productsJSX = products.map((product,index) => {
    return (
      <div key={index}>
      <Card name={product.name} image={product.image} price={product.price} brand={product.brand} skill={product.skillLevel} />
    </div>
  )
})
return (
  <section className='productGrid'>
    {productsJSX}
  </section>
)
}

export default CardList