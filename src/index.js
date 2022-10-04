import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Treino1 from './page/Treino1'
import Treino2 from './page/Treino2'
import Treino3 from './page/Treino3'
import Treino4 from './page/Treino4'
import Treino5 from './page/Treino5'
import Treino6 from './page/Treino6'
import Treino7 from './page/Treino7'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/Treino1' element={<Treino1/>}/>
      <Route path='/Treino2' element={<Treino2/>}/>
      <Route path='/Treino3' element={<Treino3/>}/>
      <Route path='/Treino4' element={<Treino4/>}/>
      <Route path='/Treino5' element={<Treino5/>}/>
      <Route path='/Treino6' element={<Treino6/>}/>
      <Route path='/Treino7' element={<Treino7/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


