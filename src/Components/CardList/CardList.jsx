import React from 'react'
import './CardList.scss'
import Card from '../Card/Card'
import skiPic from '../../assets/images/download.png'

const CardList = ({products}) => {
  const productsJSX = products.map((index) => {
    return (
      <div key={index}>
      <Card name={"Product Name"} image={skiPic} />
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