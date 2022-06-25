import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Cadastro from './pages/cadastro/index';
import Consulta from './pages/consulta/index';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Cadastro />}/>
              <Route path='/consulta' element={<Consulta />}/>
          </Routes>
      </BrowserRouter>
);