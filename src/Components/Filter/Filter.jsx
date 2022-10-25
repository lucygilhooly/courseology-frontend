import "./Filter.scss";
import React from 'react'
import FilterItem from "../FilterItem/FilterItem";


const Filter = ({toggleFilter}) => {
  return (
    <div className="filter">    
      <div className="filter__categories">
          <FilterItem toggleFilter={toggleFilter} filterBy={"Beginner"}/>
          <FilterItem toggleFilter={toggleFilter} filterBy={"Intermediate"}/>
          <FilterItem toggleFilter={toggleFilter} filterBy={"Advanced"}/>
          <FilterItem toggleFilter={toggleFilter} filterBy={"Expert"}/>
      </div>
    </div>
  )
}

export default Filter
