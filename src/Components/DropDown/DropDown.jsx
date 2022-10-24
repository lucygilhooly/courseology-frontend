const DropDown = ({ options, onChange, labelText, label }) => {
    return (
      <>
        <label htmlFor={label}>{labelText}</label>
        <select name={label} id={label} onChange={onChange}>
        <option value="">All Product Types</option>
          {options.map(option => (
            <option key={label + option} value={option.toLowerCase()}>
              {option}
            </option>
          ))}
        </select>
      </>
    );
  };
  
  export default DropDown;
  