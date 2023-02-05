import React from "react";
import NavBar from '../components/NavBar';
import ItemListContainer from '../containers/ItemListContainer';
import Error from '../containers/Error404';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from '../containers/ItemDetailContainer';

const MainNavigator = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default MainNavigator;
