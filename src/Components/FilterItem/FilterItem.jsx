import "./FilterItem.scss"

const FilterItem = ({filterBy, toggleFilter}) => {
  return (
    <div className="filters">
      <h3 onClick={toggleFilter}>{filterBy}</h3>  
    </div>
  )
}

export default FilterItem