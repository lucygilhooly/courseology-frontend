import React from 'react'
import './Main.scss'
import CardList from '../../Components/CardList/CardList'
import DropDown from '../../Components/DropDown/DropDown'
import { useState } from 'react'
import { useEffect } from 'react'


const Main = ({searchTerm}) => {
  const [products, setProducts] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");


  const getProducts = async() => {
    const res = await fetch("http://localhost:8080/products");
    const data = await res.json();
    setProducts(data)
    console.log(data)
  }
  const getTypes = async () => {
    const response = await fetch("http://localhost:8080/products/types");
    const productData = await response.json();
    setTypes(productData);
  };


  useEffect(() => {
   getProducts()
   getTypes(selectedType)
  },[selectedType])

  const handleSelectType = event => setSelectedType(event.target.value);

  const filterProducts = (productsArr, searchTerm) => {
    return productsArr.filter((products) => products.name??products.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
 
    return (
      <section className='main'>
        
        <div className='main__products'>
          <form className="main__products--form">
         <DropDown options={types} onChange={handleSelectType} label="Types" labelText="Select a Product Type: " />
         </form>
          <CardList products={filterProducts(products, searchTerm)}/>
        </div>
     </section>
  )

    }
export default Main