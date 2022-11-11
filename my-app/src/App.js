import React, { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/layout';
import GridBlock from './components/ui/GridBlock';
import Home from './Pages/Home';
import Cart from './Pages/Cart';

import classes from './scss/app.module.scss';

export const SearchContext = createContext('');

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <Layout>
        <div className={classes.content}>
          <GridBlock>
            <Routes>
              <Route path="/" element={<Home searchValue={searchValue} />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </GridBlock>
        </div>
      </Layout>
    </SearchContext.Provider>
  );
}

export default App;
