import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Auth from './Components/Auth/Auth.jsx';
import Portal from './Components/Admin/Portal/Portal.jsx';
import Confirmation from './Components/Admin/Confirmation/Confirmation.jsx';

export default function App() {
  return (
    <div id="app">
      <Routes>
        <Route path='/' element={<Auth/>} exact />
        <Route path='/portal' element={<Portal/>} exact />
        <Route path='/confirmation' element={<Confirmation/>} exact />
      </Routes>
    </div>
  );
}
