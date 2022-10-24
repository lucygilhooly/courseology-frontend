import React from 'react'
import './NavBar.scss'
import SearchBox from '../../Components/SearchBox/SearchBox'
const NavBar = ({getSearchBoxValue}) => {
  
  return (
    <div className='navBar'>
      <h3>Search here:</h3>
      <SearchBox getSearchBoxValue={getSearchBoxValue} />
    </div>
  )
}

export default NavBar