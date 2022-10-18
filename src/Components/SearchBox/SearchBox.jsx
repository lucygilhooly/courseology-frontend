import React from 'react'
import './SearchBox.scss'

const SearchBox = ({getSearchBoxValue}) => {

  return (
      <input
        type="text"
        onChange={getSearchBoxValue}
        placeholder="   🔍"
        className="search-box__input"
      />
  )
}

export default SearchBox