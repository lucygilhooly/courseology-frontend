import React, { useState } from 'react'
import './NavBar.scss'
import SearchBox from '../../Components/SearchBox/SearchBox'
import Filter from '../../Components/Filter/Filter'
const NavBar = ({getSearchBoxValue}) => {

  const [filter, setFilter] = useState(false)
  const toggleFilter = () => {
    setFilter(!filter)
  }
  
  return (
    <div className='navBar'>
      <h3>Search here:</h3>
      <SearchBox getSearchBoxValue={getSearchBoxValue} />
      <div>
        <h2 onClick={toggleFilter}>Sort By Skill Level:</h2>
        {filter && <Filter toggleFilter={toggleFilter}/>}
        </div>
    </div>
  )
}

export default NavBar