import React from 'react';
import Home from './Home';
import SingleMovie from './SingleMovie';
import Error from './Error';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDom from 'react-dom';

import Card from './Card';

const App = () => {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<SingleMovie />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter> */}

      <Card />
    </>
  )
}

export default App