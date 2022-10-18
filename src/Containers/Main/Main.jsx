import React from 'react'
import './Main.scss'
import CardList from './CardList/CardList'
import { useState } from 'react'
import { useEffect } from 'react'


const Main = ({searchTerm}) => {
  const [courses, setCourses] = useState([]);

  const getCourses = async() => {
    const url = ""; // api here
    const res = await fetch(url);
    const data = await res.json();
    setCourses(data)
    console.log(data)
  }

  useEffect(() => {
   getCourses()
  },[])

  const filterCourses = (coursesArr, searchTerm) => {
    return coursesArr.filter((courses) => courses.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
 
    return (
      <section className='main'>
        <div className='main__courses'>
          <CardList courses={filterCourses(courses, searchTerm)}/>
        </div>
     </section>
  )

    }
export default Main