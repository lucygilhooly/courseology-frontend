import React from 'react'
import './CardList.scss'
import Card from './Card/Card'

const CardList = ({courses}) => {
  const coursesJSX = courses.map((courses, index) => {
    return (
      <div key={index}>
      <Card name={course.name} image={course.image_url} />
    </div>
  )
})
return (
  <section className='courseGrid'>
    {coursesJSX}
  </section>
)
}

export default CardList