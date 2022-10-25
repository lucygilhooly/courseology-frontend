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
      <SearchBox getSearchBoxValue={getSearchBoxValue} />
      <div>
        <h3 onClick={toggleFilter}>Filter By Skill</h3>
        {filter && <Filter toggleFilter={toggleFilter}/>}
        </div>
    </div>
  )
}

export default NavBar