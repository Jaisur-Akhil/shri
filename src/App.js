/** @format */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Style/app.css';
import Th from './Pages/Th';
import Home from './Pages/Home';
import Qa from './Pages/Qa/Qa';
import Login from './Pages/Login/Login';
import Error from './Pages/Error/Error';
function App() {
  return (
    <BrowserRouter className='app'>
      <Routes>
        <Route path='/Th' element={<Th />}></Route>
        <Route path='/' element={<Login />}></Route>
        <Route path='/Qa' element={<Qa />}>
          {' '}
        </Route>
        <Route path='/Error' element={<Error />}>
          {' '}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
