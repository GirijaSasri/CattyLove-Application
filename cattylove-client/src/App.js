import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageLayout from './containers/PageLayout/PageLayout';
import AddCat from './containers/AddCat/AddCat';
import Admin from './containers/Admin/Admin';
import EditCat from './containers/EditCat/EditCat';

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
            <Route path='/' element={<h1>Hello world</h1>} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/admin/add' element={<AddCat />} />
            <Route path='/admin/edit/:id' element={<EditCat />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}

export default App;
