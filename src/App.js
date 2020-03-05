import React from 'react';
import './App.css';
import Header from './components/header/Header.js'
import SearchForm from './components/searchForm/SearchForm';
import ImagesBlock from './components/imagesblock/ImagesBlock';
import Navbar from './components/navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Header/>
      <SearchForm/>
      <ImagesBlock/>
      <Navbar/>
    </div>
  );
}

export default App;
