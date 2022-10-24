import React from 'react';
import './App.scss';
import { useState } from "react";
import Main from './Containers/Main/Main';
import NavBar from './Containers/NavBar/NavBar';
import Header from './Containers/Header/Header';

function App() {
const [searchTerm, setSearchTerm] = useState(" ")

const getSearchBoxValue = (event) => {
  const lowerSearchTerm = event.target.value.toLowerCase()
  setSearchTerm(lowerSearchTerm)
}
  return (
    <section className='app'>
    <div className='app__header'>
      <Header />
    </div>
    <div className="app__body">
      <NavBar getSearchBoxValue={getSearchBoxValue}/>
      <Main searchTerm={searchTerm}/>
    </div>
    </section>
  );
}

export default App;
