import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import App from './App';
import HomeLayout from './components/shared/HomeLayout';
import Jobs from './components/Jobs';
import Contractors from './components/Contractors';


const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomeLayout />}>
        <Route index element={<Jobs />} />
        <Route path='contractors' element={<Contractors />} />
      </Route>
    </Routes>
  </BrowserRouter>
);