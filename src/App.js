import React from 'react'
import { Route, Routes } from "react-router-dom";
import {VideoListing} from "./pages/VideoListing/VideoListing";
import {Login} from './pages/Login/Login'
import {Signup} from './pages/Signup/Signup'

function App() {
  return (
    
      <Routes>
        <Route path='/' element={<VideoListing />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
    
  );
}

export { App };
