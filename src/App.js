import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import { Layout } from 'antd';

import Navbar from './components/Navbar';
import FooterSec from './components/FooterSec';
import ContentApp from './components/ContentApp';
import Search from './components/Search';

function App() {
  // const { Footer } = Layout;
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


  return (
    <Layout className="layout">
      <div className=''>
        <Navbar />
        <Search handleSearchChange={handleSearchChange} />
        <ContentApp datalist={datalist} />
        <FooterSec />
      </div>
    </Layout>
  );
}

export default App;
