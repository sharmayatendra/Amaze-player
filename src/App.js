import React from 'react'
import { Route, Routes } from "react-router-dom";
import {VideoListing} from "./pages/VideoListing/VideoListing";

function App() {
  return (
    
      <Routes>
        <Route path='/' element={<VideoListing />}></Route>
      </Routes>
    
  );
}

export { App };
