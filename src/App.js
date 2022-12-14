import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import { Layout } from 'antd';

import Navbar from './components/Navbar';
import FooterSec from './components/FooterSec';
import ContentApp from './components/ContentApp';
import Search from './components/Search';
import Category from './components/Category';

function App() {
  const [datalist, setDatalist] = useState('')
  const [query, setQuery] = useState('')
  const source = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`


  useEffect(() => {
    axios.get(source).then((res) => {
      setDatalist(res.data.drinks)
    }).catch(err => console.log(err))
  }, [source])

  const handleSearchChange = (e) => {
    setQuery(e.target.value)
  }

  const handleClickCategory = async (string) => {
    try {
      const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${string}`)
      setDatalist(res.data.drinks)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <Layout className="layout">
      <div className=''>
        <Navbar />
        <Category handleClickCategory={handleClickCategory} />
        <Search handleSearchChange={handleSearchChange} />
        <ContentApp datalist={datalist} />
        <FooterSec />
      </div>
    </Layout>
  );
}

export default App;
