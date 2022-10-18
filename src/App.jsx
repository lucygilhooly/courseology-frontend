import React from 'react';
import './App.scss';
import { useState } from "react";
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';

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
