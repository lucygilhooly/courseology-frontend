import "./Filter.scss";
import React from 'react'
import FilterItem from "../FilterItem/FilterItem";


const Filter = ({toggleFilter}) => {
  return (
    <div className="filter">    
      <div className="filter__categories">
          <FilterItem toggleFilter={toggleFilter} filterTerm={"Beginner"}/>
          <FilterItem toggleFilter={toggleFilter} filterTerm={"Intermediate"}/>
          <FilterItem toggleFilter={toggleFilter} filterTerm={"Advanced"}/>
          <FilterItem toggleFilter={toggleFilter} filterTerm={"Expert"}/>
      </div>
    </div>
  )
}

export default Filter
